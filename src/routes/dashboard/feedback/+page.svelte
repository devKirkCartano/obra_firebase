<script>
  import { onMount } from "svelte";
  // @ts-ignore
  // @ts-ignore
  import DashboardTop from "$lib/components/DashboardTop.svelte";
  import Header from "$lib/components/Header.svelte";
  import { db } from "$lib/firebase";
  import "datatables.net";
  import "datatables.net-dt/css/dataTables.dataTables.css";
  import jQuery from "jquery";
// @ts-ignore
  import Sidebar from "$lib/components/Sidebar.svelte";
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
  
      // Filter out the user with document ID 'user_1'
      users = users.filter(user => user.id !== 'user_1');
  
      // Initialize DataTable once the data is fetched
      jQuery(document).ready(function () {
        const table = jQuery("#feedback").DataTable();
        
        // Clear the table first
        table.clear();
  
        // Add the new data
        // @ts-ignore
        users.forEach(user => {
          table.row.add([
            `${user.firstName} ${user.lastName}`,
            user.address,
            user.email,
          ]).draw(false);
        });
  
        // Make rows clickable
        jQuery('#feedback tbody').on('click', 'tr', function () {
          // @ts-ignore
          const data = table.row(this).data();
          // Set modal content
          // @ts-ignore
          document.getElementById('exampleModalLabel').textContent = `${data[0]}`;
          // @ts-ignore
          // document.querySelector('.modal-body').textContent = `Address: ${data[1]} \n Email: ${data[2]}`;
          
          // Show the modal
          // @ts-ignore
          const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
          modal.show();
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
                    <th>Name</th>
                    <th>Address / School</th>
                    <th>Email</th>
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
  
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-black">
            <p>Name: </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </main>
  
  <!-- Bootstrap JS -->
  