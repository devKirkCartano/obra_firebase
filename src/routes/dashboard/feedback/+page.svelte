<script>
  import { onMount } from "svelte";
  import DashboardTop from "$lib/components/DashboardTop.svelte";
  import Header from "$lib/components/Header.svelte";
  import { db } from "$lib/firebase";
  import "datatables.net";
  import "datatables.net-dt/css/dataTables.dataTables.css";
  // @ts-ignore
  import jQuery from "jquery";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import { collection, onSnapshot } from "firebase/firestore";
  
  let users = [];
  // @ts-ignore
  let table;

  function initializeDataTable() {
    jQuery(document).ready(function () {
      table = jQuery("#feedback").DataTable({
        columns: [
          { title: "Name" },
          { title: "Address / School" },
          { title: "Email" }
        ]
      });

      // Make rows clickable
      jQuery('#feedback tbody').on('click', 'tr', function () {
        // @ts-ignore
        const data = table.row(this).data();
        // @ts-ignore
        document.getElementById('exampleModalLabel').textContent = `${data[0]}`;
        
        // @ts-ignore
        const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
        modal.show();
      });
    });
  }

  // @ts-ignore
  function updateDataTable(users) {
    // @ts-ignore
    if (table) {
      table.clear();
      // @ts-ignore
      users.forEach(user => {
        // @ts-ignore
        table.row.add([
          `${user.firstName} ${user.lastName}`,
          user.address,
          user.email
        ]).draw(false);
      });
    }
  }

  onMount(() => {
    initializeDataTable();

    const usersRef = collection(db, "users");
    
    const unsubscribe = onSnapshot(usersRef, (querySnapshot) => {
      users = querySnapshot.docs
        .filter(doc => doc.id !== 'user_1')
        .map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      updateDataTable(users);
    }, (error) => {
      console.error("Error fetching users: ", error);
    });

    return () => {
      unsubscribe();
    };
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

