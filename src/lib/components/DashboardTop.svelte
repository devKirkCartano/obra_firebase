<script>
  import { db } from '$lib/firebase';
  import { collection, getDocs } from 'firebase/firestore';
  import { onMount } from 'svelte';

  let userCount = 0;
  let feedbackCount = 0;
  let loadingUsers = true;
  let loadingFeedback = true;

  async function fetchUserCount() {
    const usersRef = collection(db, 'users');
    
    try {
      const querySnapshot = await getDocs(usersRef);
      
      // Filter out the user with ID 'user_1'
      const filteredUsers = querySnapshot.docs.filter(doc => doc.id !== 'user_1');
      
      // Get the count of filtered users
      userCount = filteredUsers.length;
      
      console.log("User count: ", userCount);
    } catch (error) {
      console.error('Error fetching users: ', error);
    } finally {
      loadingUsers = false;
    }
  }

  async function fetchFeedbackCount() {
    const feedbackRef = collection(db, 'feedback');
    
    try {
      const querySnapshot = await getDocs(feedbackRef);
      
      // Get the count of feedback documents
      feedbackCount = querySnapshot.size;
      
      console.log("Feedback count: ", feedbackCount);
    } catch (error) {
      console.error('Error fetching feedback: ', error);
    } finally {
      loadingFeedback = false;
    }
  }

  onMount(() => {
    fetchUserCount();
    fetchFeedbackCount();
  });
</script>

<div class="dashboard-top">
  <div class="row">
    <div class="col-8">
      <div class="card bg-color text-white">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            {#if loadingUsers}
              <p class="fs-6 m-0">Loading...</p>
            {:else}
              <p class="fs-1 fw-bold m-0">{userCount}</p>
            {/if}
            <div class="d-flex justify-content-center align-items-center rounded icon-week">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#00D25B" class="bi bi-person-walking" viewBox="0 0 16 16">
                <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.8 1.8 0 0 1-.088.395l-.318.906.213.242a.8.8 0 0 1 .114.175l2 4.25a.75.75 0 1 1-1.357.638l-1.956-4.154-1.68-1.921A.75.75 0 0 1 6 8.96l.138-2.613-.435.489-.464 2.786a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .18-.375l2-2.25Z"/>
                <path d="M6.25 11.745v-1.418l1.204 1.375.261.524a.8.8 0 0 1-.12.231l-2.5 3.25a.75.75 0 1 1-1.19-.914zm4.22-4.215-.494-.494.205-1.843.006-.067 1.124 1.124h1.44a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.531-.22Z"/>
              </svg>
            </div>
          </div>
          <div class="pt-3">
            <p class="fw-bold m-0">REGISTERED</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="card bg-color text-white">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            {#if loadingFeedback}
              <p class="fs-6 m-0">Loading...</p>
            {:else}
              <p class="fs-1 fw-bold m-0">{feedbackCount}</p>
            {/if}
            <div class="d-flex justify-content-center align-items-center rounded icon-feedback">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#0079D2" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
              </svg>
            </div>
          </div>
          <div class="pt-3">
            <p class="fw-bold m-0">FEEDBACK</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
