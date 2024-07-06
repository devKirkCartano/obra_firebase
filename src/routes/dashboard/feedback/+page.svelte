<script>
  import { onMount } from "svelte";
  import DashboardTop from "$lib/components/DashboardTop.svelte";
  import Header from "$lib/components/Header.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import { db } from "$lib/firebase";
  import "datatables.net";
  import "datatables.net-dt/css/dataTables.dataTables.css";
  // @ts-ignore
  // @ts-ignore
  import jQuery from "jquery";
  import { collection, onSnapshot } from "firebase/firestore";

  // @ts-ignore
  let users = [];
  // @ts-ignore
  let table;

  function initializeDataTable() {
    jQuery(document).ready(function () {
      table = jQuery("#feedback").DataTable({
        columns: [
          { title: "Name" },
          { title: "Address / School" },
          { title: "Email" },
        ],
        // @ts-ignore
        createdRow: function (row) {
          jQuery(row).addClass("text-center");
        },
      });

      // Make rows clickable
      // Make rows clickable
      jQuery("#feedback tbody").on("click", "tr", function () {
        // @ts-ignore
        const data = table.row(this).data();
        const userEmail = data[2];

        // Find the specific user in your array
        // @ts-ignore
        const specificUser = users.find((user) => user.email === userEmail);
        console.log(specificUser);
        // Update modal content
        // @ts-ignore
        document.getElementById("modal-name").textContent = `Name: ${data[0]}`;
        // @ts-ignore
        document.getElementById("modal-email").textContent =
          `Email: ${data[2]}`;

        console.log(specificUser.rating);
        // @ts-ignore
        document.getElementById("modal-rating").textContent = `Rating: ${
          specificUser["rating "] || "No rating available"
        }`;
        // @ts-ignore
        document.getElementById("modal-feedback").textContent = `Feedback: ${
          specificUser.feedback || "No feedback available"
        }`;

        // Show the modal
        // @ts-ignore
        const modal = new bootstrap.Modal(
          document.getElementById("exampleModal")
        );
        modal.show();
      });
    });
  }

  // Function to update DataTable with users data
  // @ts-ignore
  function updateDataTable(users) {
    // @ts-ignore
    if (table) {
      table.clear();

      // @ts-ignore
      users.forEach((user) => {
        if (user.email !== "obrasantarosa07@gmail.com") {
          // @ts-ignore
          table.row
            .add([
              `${user.firstName} ${user.lastName}`,
              user.address || "N/A",
              user.email || "N/A",
            ])
            .draw(false);
        }
      });
    }
  }

  onMount(() => {
    // Initialize DataTable
    initializeDataTable();

    // Fetch users from Firestore
    const usersRef = collection(db, "users");
    const unsubscribe = onSnapshot(
      usersRef,
      (querySnapshot) => {
        users = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        updateDataTable(users);
      },
      (error) => {
        console.error("Error fetching users: ", error);
      }
    );

    // Clean up listener on component unmount
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
        <div class="card bg-color text-white">
          <div class="card-body">
            <table id="feedback" class="display" style="width:100%">
              <thead>
                <tr>
                  <th class="text-center">Name</th>
                  <th class="text-center">Address / School</th>
                  <th class="text-center">Email</th>
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
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content bg-color text-white">
        <div class="modal-header justify-content-center">
          <h1 class="modal-title fs-5">Feedback Details</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p id="modal-name"></p>
          <p id="modal-email"></p>
          <p id="modal-rating"></p>
          <p id="modal-feedback"></p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  .text-center {
    text-align: center;
  }
</style>
