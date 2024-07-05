<script>
  import DashboardTop from "$lib/components/DashboardTop.svelte";
  import Header from "$lib/components/Header.svelte";
  // @ts-ignore
  import Image from "$lib/components/Image.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

  import { onMount } from "svelte";

  let currentPath = "";
  let lastSegment = "";
  // @ts-ignore
  /**
   * @type {any[]}
   */
  let images = []; // Array to store fetched image URLs

  onMount(() => {
    // Get the current path
    currentPath = window.location.pathname;

    // Get the last segment after splitting the path by '/'
    let segments = currentPath.split("/");
    lastSegment = segments[segments.length - 1];

    // Decode the last segment to handle spaces
    lastSegment = decodeURIComponent(lastSegment);

    const storage = getStorage();
    const storageRef = ref(storage, `images/${lastSegment}`);
    console.log("Storage Ref:", storageRef);
    // List all items (images) in the folder
    listAll(storageRef)
      .then(async (res) => {
        // Process each image item
        for (const imageRef of res.items) {
          try {
            // Get the download URL for each image
            const imageUrl = await getDownloadURL(imageRef);
            console.log("Image URL:", imageUrl);

            // Push imageUrl into images array
            // @ts-ignore
            images = [...images, imageUrl];

            // Svelte reactivity triggers UI update automatically
          } catch (error) {
            console.error("Error fetching image URL:", error);
          }
        }
      })
      .catch((error) => {
        console.error("Error listing images:", error);
      });
  });
</script>

<Header />
<Sidebar />

<main class="p-2">
  <DashboardTop />

  <div class="dashboard-bottom">
    <div class="row gx-5">
      <div class="col">
        <div class="card bg-color" style="max-height: 100%; overflow-y: auto;">
          <div>
            <!-- Display fetched images in the first column -->
            {#each images as imageUrl}
              <!-- svelte-ignore a11y-img-redundant-alt -->
              <img
                class="  rounded-4"
                src={imageUrl}
                alt="Image"
                style="width: 50%; height: 250px;"
              />
            {/each}
          </div>
          <input type="file" class="form-control">
        </div>
      </div>
      <div class="col">
        <div class="card bg-color text-white">
          <!-- Placeholder for description or other content -->
          <p>
            This column is for description or other content related to images.
          </p>
          <p>Replace this placeholder with actual content as needed.</p>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  /* Add any additional styling here */
</style>
