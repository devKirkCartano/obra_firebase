import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { writable } from "svelte/store";
import { auth } from "$lib/firebase";

export const authStore = writable({
  user: null,
  loading: true,
  data: {},
});

export const authHandlers = {
  login: async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  },
  logout: async () => {
    await signOut(auth);
  },
};
