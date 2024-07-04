<script>
  import { onMount } from "svelte";
  import { auth } from "$lib/firebase";

  onMount(() => {
    console.log("Mounting");
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      const currenPath = window.location.pathname;
      console.log("Current Path:", currenPath);

      console.log("User:", user);
      const nonAuthRoutes = ["/", "/forgot"];
      if (!user && !nonAuthRoutes.includes(currenPath)) {
        window.location.href = "/";
        return;
      }

      if (user && currenPath === "/") {
        window.location.href = "/dashboard";
        return;
      }
    });
  });
</script>

<div class="body">
  <slot />
</div>
