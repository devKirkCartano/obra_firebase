<script>
  import DashboardTop from "$lib/components/DashboardTop.svelte";
  import Header from "$lib/components/Header.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  // Firebase Storage setup
  import { storage } from "$lib/firebase"; // Import storage from your Firebase setup file
  // Store for images
  // const images = writable([]);

  // onMount(async () => {
  //   const storageRef = ref(storage, "tiongco_brothers");

  //   try {
  //     const list = await listAll(storageRef);

  //     // Fetching and processing images
  //     const itemsArray = await Promise.all(
  //       list.items.map(async (itemRef) => {
  //         const url = await getDownloadURL(itemRef);
  //         const filename = itemRef.name;
  //         const numberPart = parseInt(filename.split(".")[0]);

  //         return {
  //           url,
  //           numberPart,
  //         };
  //       })
  //     );

  //     // Sorting items by numeric part of filename
  //     itemsArray.sort((a, b) => a.numberPart - b.numberPart);

  //     // Update the images store with sorted items
  //     images.set(itemsArray);
  //   } catch (error) {
  //     console.error("Error fetching images:", error);
  //   }
  // });
</script>

<Header />

<Sidebar />

<main class="p-2">
  <DashboardTop/>

  <div class="dashboard-bottom">
    <div class="row">
      <!-- {#each $images as item (item.url)} -->
      <div class="col-4">
        <div class="card bg-color text-white p-0 border border-light rounded-3">
          <div class="card-body p-0">
            <img
              class="rounded-3"
              alt=""
              style="width: 100%; height: 300px;"
              src=""
            />
          </div>
        </div>
      </div>
      <!-- {/each} -->
    </div>
  </div>
</main>
