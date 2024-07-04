// src/stores/authStore.js
import { writable } from "svelte/store";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "$lib/firebase";

// Define the auth store
export const authStore = writable({
  user: null,
  loading: true,
  data: {},
});

// Define the auth handlers
export const authHandlers = {
  // @ts-ignore
  login: async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  },
  logout: async () => {
    await signOut(auth);
  },
};

// Listen to authentication state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    authStore.set({
      // @ts-ignore
      user,
      loading: false,
      data: {
        email: user.email,
        uid: user.uid,
      },
    });
  } else {
    authStore.set({
      user: null,
      loading: false,
      data: {},
    });
  }
});
