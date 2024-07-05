<script>
  import { onMount } from "svelte";
  // @ts-ignore
  import jQuery from "jquery";
// Import jQuery with a different name
  import "datatables.net";
  import "datatables.net-dt/css/dataTables.dataTables.css";
// Ensure correct path and filename
  import { db } from "$lib/firebase";
// Import the initialized Firestore instance
  import DashboardTop from "$lib/components/DashboardTop.svelte";
  import Header from "$lib/components/Header.svelte";
// @ts-ignore
  import Sidebar from "$lib/components/Sidebar.svelte";
  import "datatables.net";
  import "datatables.net-dt/css/dataTables.dataTables.css";
  import { collection, getDocs } from "firebase/firestore";

  // @ts-ignore
  let users = [];

  onMount(async () => {
    try {
      // Fetch data from Firestore
      const querySnapshot = await getDocs(collection(db, "users"));
      users = querySnapshot.docs.map(doc => ({
        id: doc.id, // Include document ID
        ...doc.data()
      }));

      // Initialize DataTable once the data is fetched
      jQuery(document).ready(function () {
        const table = jQuery("#feedback").DataTable();
        
        // @ts-ignore
        console.log(users)
        // Clear the table first
        table.clear();

        // Add the new data
        // @ts-ignore
        users.forEach(user => {
          table.row.add([
            user.id, // Add document ID
            `${user.firstName} ${user.lastName}`,
            user.address || user.school || '',
            user.email,
            // new Date(user.timestamp).toLocaleString()
          ]).draw(false);
        });
      });
    } catch (error) {
      console.error("Error fetching users: ", error);
    }
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
                  <!-- <th>Date / Time</th> -->
                </tr>
              </thead>
              <tbody>
                <!-- DataTable will populate this -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
