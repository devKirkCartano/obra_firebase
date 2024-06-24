<script>
  import { onMount } from "svelte";
  import { auth } from "$lib/firebase";

  onMount(() => {
    console.log("Mounting");
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      const currenPath = window.location.pathname;
      console.log("Current Path:", currenPath);

      const nonAuthRoutes = ["/", "/forgot"];
      if (!user && !nonAuthRoutes.includes(currenPath)) {
        window.location.href = "/";
      }
    });
  });
</script>

<div class="body">
  <slot />
</div>
