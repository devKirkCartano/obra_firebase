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
  let invalidFile = false; // State to track invalid file selection

  onMount(async () => {
    currentPath = window.location.pathname;
    let segments = currentPath.split("/");
    lastSegment = segments[segments.length - 1];
    lastSegment = decodeURIComponent(lastSegment);

    const storage = getStorage();
    const storageRef = ref(storage, `images/${lastSegment}`);

    try {
      const res = await listAll(storageRef);
      for (const imageRef of res.items) {
        try {
          const imageUrl = await getDownloadURL(imageRef);
          // @ts-ignore
          images = [...images, imageUrl];
        } catch (error) {
          console.error("Error fetching image URL:", error);
        }
      }
    } catch (error) {
      console.error("Error listing images:", error);
    }

    const fileRef = ref(storage, `descriptions/${lastSegment}.txt`);
    try {
      const fileUrl = await getDownloadURL(fileRef);
      const response = await fetch(fileUrl);
      fileContent = await response.text();
    } catch (error) {
      console.error("Error fetching file content:", error);
    }
  });

  // @ts-ignore
  async function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
      console.error("Invalid file type. Please upload a JPG or PNG file.");
      invalidFile = true; // Set state to indicate invalid file selection
      return;
    } else {
      invalidFile = false; // Reset state if a valid file is selected
    }

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
                style="width: 25%; height: 250px;"
              />
            {/each}
          </div>
          <div class="my-2">
            <input
              type="file"
              class:invalid={invalidFile}
              class="form-control"
              on:change={handleFileUpload}
            />
          </div>
          {#if invalidFile}
            <p class="text-danger">
              Invalid file type. Please upload a JPG or PNG file.
            </p>
          {/if}
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  .form-control.invalid {
    border-color: red; /* Example styling for invalid state */
  }

  .text-danger {
    color: red;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
</style>
