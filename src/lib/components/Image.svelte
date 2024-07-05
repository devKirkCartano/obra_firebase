<!-- ImageFetch.svelte -->
<script>
    import { getDownloadURL, ref } from "firebase/storage";
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
  
    export let storage;
    export let folder = "";
    export let imageName = "";
  
    // Store for the image URL
    const imageUrl = writable("");
  
    onMount(async () => {
      const storageRef = ref(storage, `${folder}/${imageName}`);
    console.log(storageRef)
      try {
        const url = await getDownloadURL(storageRef);
        imageUrl.set(url);
      } catch (error) {
        console.error(`Error fetching image ${imageName}:`, error);
      }
    });
  </script>
  
  {#if $imageUrl}
    <img
      class="rounded-3"
      alt="{imageName}"
      style="width: 100%; height: 300px;"
      src="{$imageUrl}"
    />
  {:else}
    <p>Loading...</p>
  {/if}
  
  <style>
    /* Add any additional styling here */
  </style>
  