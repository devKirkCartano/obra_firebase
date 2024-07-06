<script>
  import DashboardTop from "$lib/components/DashboardTop.svelte";
  import Header from "$lib/components/Header.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import {
    getStorage,
    ref,
    listAll,
    getDownloadURL,
    uploadBytes,
  } from "firebase/storage";

  import { onMount } from "svelte";

  let currentPath = "";
  let lastSegment = "";
  // @ts-ignore
  /**
   * @type {any[]}
   */
  let images = []; // Array to store fetched image URLs
  let fileContent = "";

  onMount(async () => {
    currentPath = window.location.pathname;
    let segments = currentPath.split("/");
    lastSegment = segments[segments.length - 1];
    lastSegment = decodeURIComponent(lastSegment);

    const storage = getStorage();
    const storageRef = ref(storage, `images/${lastSegment}`);

    listAll(storageRef)
      .then(async (res) => {
        for (const imageRef of res.items) {
          try {
            const imageUrl = await getDownloadURL(imageRef);
            // @ts-ignore
            images = [...images, imageUrl];
          } catch (error) {
            console.error("Error fetching image URL:", error);
          }
        }
      })
      .catch((error) => {
        console.error("Error listing images:", error);
      });

    const fileRef = ref(storage, `descriptions/${lastSegment}.txt`);
    const fileUrl = await getDownloadURL(fileRef);
    const response = await fetch(fileUrl);
    fileContent = await response.text();
  });

  // @ts-ignore
  async function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const storage = getStorage();
    const storageRef = ref(storage, `images/${lastSegment}/${file.name}`);

    try {
      await uploadBytes(storageRef, file);
      console.log("File uploaded successfully");
      const imageUrl = await getDownloadURL(storageRef);
      // @ts-ignore
      images = [...images, imageUrl];
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  }
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
            {#each images as imageUrl}
              <!-- svelte-ignore a11y-img-redundant-alt -->
              <img
                class="rounded-4"
                src={imageUrl}
                alt="Image"
                style="width: 50%; height: 250px;"
              />
            {/each}
          </div>
          <input
            type="file"
            class="form-control"
            on:change={handleFileUpload}
          />
        </div>
      </div>
      <div class="col">
        <div class="card bg-color text-white">
          <pre>{fileContent}</pre>
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
