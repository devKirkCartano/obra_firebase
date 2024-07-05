<script>
  import DashboardTop from "$lib/components/DashboardTop.svelte";
  import Header from "$lib/components/Header.svelte";
  import Image from '$lib/components/Image.svelte';
  import Sidebar from "$lib/components/Sidebar.svelte";
  import { storage } from "$lib/firebase";
 // Ensure this import is correctly set

  // Store for the image URL
  // const imageUrl = writable("");

  // onMount(async () => {
  //   const imageName = "almires_3.jpg";
  //   const storageRef = ref(storage, `images/almires/${imageName}`);

  //   try {
  //     const url = await getDownloadURL(storageRef);
  //     imageUrl.set(url);
  //   } catch (error) {
  //     console.error(`Error fetching image ${imageName}:`, error);
  //   }
  // });
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
            <div class="row">
              <Image storage={storage} folder="images/almires" imageName="almires_3.jpg" /> 
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card bg-color text-white p-0 border border-light rounded-3">
          <div class="card-body p-0">
            <div class="row">
              <Image storage={storage} folder="images/ancestral houses" imageName="ancestral_houses_1.png" /> 
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card bg-color text-white p-0 border border-light rounded-3">
          <div class="card-body p-0">
            <div class="row">
              <Image storage={storage} folder="images/makinilya" imageName="makinilya_2.png" /> 
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card bg-color text-white p-0 border border-light rounded-3">
          <div class="card-body p-0">
            <div class="row">
              <Image storage={storage} folder="images/angel zavalla" imageName="angel.jpg" /> 
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card bg-color text-white p-0 border border-light rounded-3">
          <div class="card-body p-0">
            <div class="row">
              <Image storage={storage} folder="images/arcadio arambulo" imageName="arcadio.jpg" /> 
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card bg-color text-white p-0 border border-light rounded-3">
          <div class="card-body p-0">
            <div class="row">
              <Image storage={storage} folder="images/bahay kubo" imageName="bahay_kubo_3.jpg" /> 
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card bg-color text-white p-0 border border-light rounded-3">
          <div class="card-body p-0">
            <div class="row">
              <Image storage={storage} folder="images/basilio gonzales ancestral house" imageName="basilio_gonzales_ancestral_house_1.jpg" /> 
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card bg-color text-white p-0 border border-light rounded-3">
          <div class="card-body p-0">
            <div class="row">
              <Image storage={storage} folder="images/basilio gonzales y barroma" imageName="basilio.jpg" /> 
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card bg-color text-white p-0 border border-light rounded-3">
          <div class="card-body p-0">
            <div class="row">
              <Image storage={storage} folder="images/bayoneta" imageName="bayoneta_1.jpg" /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  /* Add any additional styling here */
</style>
