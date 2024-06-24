<script>
  import Header from "../../components/Header.svelte";
  import Sidebar from "../../components/Sidebar.svelte";
  import DashboardTop from "../../components/DashboardTop.svelte";
</script>

<Header />

<Sidebar />

<main class="p-2">
  <DashboardTop />
  <div class="dashboard-bottom">
    <div class="row"></div>
  </div>
</main>
