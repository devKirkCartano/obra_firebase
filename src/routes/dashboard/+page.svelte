<script>
  import DashboardTop from "$lib/components/DashboardTop.svelte";
  import Header from "$lib/components/Header.svelte";
  import Image from "$lib/components/Image.svelte";
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
              <Image
                {storage}
                folder="images/almires"
                imageName="almires_3.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card bg-color text-white p-0 border border-light rounded-3">
          <div class="card-body p-0">
            <div class="row">
              <Image {storage} folder="images/banga" imageName="banga_3.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card bg-color text-white p-0 border border-light rounded-3">
          <div class="card-body p-0">
            <div class="row">
              <Image
                {storage}
                folder="images/bayoneta"
                imageName="bayoneta_1.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card bg-color text-white p-0 border border-light rounded-3">
          <div class="card-body p-0">
            <div class="row">
              <Image
                {storage}
                folder="images/dama juana bottle"
                imageName="dama_juana_bottle_2.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card bg-color text-white p-0 border border-light rounded-3">
          <div class="card-body p-0">
            <div class="row">
              <Image
                {storage}
                folder="images/dapilan"
                imageName="dapilan_2.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card bg-color text-white p-0 border border-light rounded-3">
          <div class="card-body p-0">
            <div class="row">
              <Image
                {storage}
                folder="images/enchanted kingdom"
                imageName="enchanted_kingdom_1.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card bg-color text-white p-0 border border-light rounded-3">
          <div class="card-body p-0">
            <div class="row">
              <Image
                {storage}
                folder="images/gilingang bato"
                imageName="gilingang_bato_2.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card bg-color text-white p-0 border border-light rounded-3">
          <div class="card-body p-0">
            <div class="row">
              <Image
                {storage}
                folder="images/la mesa de officina"
                imageName="la_mesa_de_officina_(office_desk)_1.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card bg-color text-white p-0 border border-light rounded-3">
          <div class="card-body p-0">
            <div class="row">
              <Image
                {storage}
                folder="images/makinilya"
                imageName="makinilya_2.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card bg-color text-white p-0 border border-light rounded-3">
          <div class="card-body p-0">
            <div class="row">
              <Image
                {storage}
                folder="images/salakot at salakab"
                imageName="salakot_at_salakab_1.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card bg-color text-white p-0 border border-light rounded-3">
          <div class="card-body p-0">
            <div class="row">
              <Image
                {storage}
                folder="images/tapayan"
                imageName="tapayan_1.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card bg-color text-white p-0 border border-light rounded-3">
          <div class="card-body p-0">
            <div class="row">
              <Image
                {storage}
                folder="images/the rondalla of santa rosa"
                imageName="rondalla_ng_santa_rosa_2.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card bg-color text-white p-0 border border-light rounded-3">
          <div class="card-body p-0">
            <div class="row">
              <Image
                {storage}
                folder="images/town plaza"
                imageName="town_plaza_1.jpg"
              />
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
