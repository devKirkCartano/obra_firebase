<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import jQuery from "jquery"; // Import jQuery with a different name
  import "datatables.net";
  import "datatables.net-dt/css/dataTables.dataTables.css"; // Ensure correct path and filename
  import Sidebar from "$lib/components/Sidebar.svelte";
  import Header from "$lib/components/Header.svelte";
  import DashboardTop from "$lib/components/DashboardTop.svelte";

  onMount(() => {
    // Initialize DataTable once the component is mounted
    jQuery(document).ready(function () {
      jQuery("#feedback").DataTable();
    });
  });
</script>

<Header />

<Sidebar />
<main class="p-2">
  <DashboardTop />

  <div class="dashboard-bottom">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <table id="feedback" class="display" style="width:100%">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Address / School</th>
                  <th>Email</th>
                  <th>Date / Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tiger Nixon</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>61</td>
                  <td>2011-04-25</td>
                </tr>
                <tr>
                  <td>Garrett Winters</td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>63</td>
                  <td>2011-07-25</td>
                </tr>
                <tr>
                  <td>Ashton Cox</td>
                  <td>Junior Technical Author</td>
                  <td>San Francisco</td>
                  <td>66</td>
                  <td>2009-01-12</td>
                </tr>
                <tr>
                  <td>Cedric Kelly</td>
                  <td>Senior Javascript Developer</td>
                  <td>Edinburgh</td>
                  <td>22</td>
                  <td>2012-03-29</td>
                </tr>
                <tr>
                  <td>Airi Satou</td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>33</td>
                  <td>2008-11-28</td>
                </tr>
                <tr>
                  <td>Donna Snider</td>
                  <td>Customer Support</td>
                  <td>New York</td>
                  <td>27</td>
                  <td>2011-01-25</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
