<script>
  import DashboardTop from "$lib/components/DashboardTop.svelte";
  import Header from "$lib/components/Header.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import { storage } from "$lib/firebase";
  import { getDownloadURL, ref } from "firebase/storage";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
 // Ensure this import is correctly set

  // Store for the image URL
  const imageUrl = writable("");

  onMount(async () => {
    const imageName = "almires_3.jpg";
    const storageRef = ref(storage, `images/almires/${imageName}`);

    try {
      const url = await getDownloadURL(storageRef);
      imageUrl.set(url);
    } catch (error) {
      console.error(`Error fetching image ${imageName}:`, error);
    }
  });
</script>

<Header />
<Sidebar />

<main class="p-2">
  <DashboardTop />

  <div class="dashboard-bottom">
    <div class="row">
      <div class="col-4">
        <div class="card bg-color text-white p-0 border border-light rounded-3">
          <div class="card-body p-0">
            {#if $imageUrl}
              <img
                class="rounded-3"
                alt="almires_3"
                style="width: 100%; height: 300px;"
                src="{$imageUrl}"
              />
            {:else}
              <p>Loading...</p>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  /* Add any additional styling here */
</style>
