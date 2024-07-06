<script>
  // @ts-ignore
  // @ts-ignore
  import { onMount } from "svelte";
  import { getAuth, sendPasswordResetEmail } from "firebase/auth";

  let email = "";
  let message = "";
  let alertType = "";

  // Function to display messages
  // @ts-ignore
  function showMessage(msg, type) {
    message = msg;
    alertType = type;
    setTimeout(() => {
      message = "";
      alertType = "";
    }, 5000); // Hide message after 5 seconds
  }

  // Function to handle form submission for password reset
  // @ts-ignore
  async function handleReset(event) {
    event.preventDefault();
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      showMessage("Password reset email sent successfully", "alert-success");
      console.log("Password reset email sent successfully");
    } catch (error) {
      // @ts-ignore
      const errorMessage = error.message;
      showMessage(errorMessage, "alert-danger");
      console.error(error);
    }
  }

  // Function to handle input validation for email
  // @ts-ignore
  function handleEmailInput(event) {
    let value = event.target.value;

    // Remove non-letter, non-number, and non-allowed characters
    value = value.replace(/[^A-Za-z0-9@.-]/g, "");

    // Remove spaces at the beginning and hyphen at the beginning
    value = value.replace(/^\s+/, "").replace(/^-/, "");

    // Limit the length if needed
    const maxLength = 50; // Set the desired maximum length
    if (value.length > maxLength) {
      value = value.slice(0, maxLength);
    }

    // Prevent spaces
    value = value.replace(/\s/g, "");

    // Prevent .c0 and .C0
    value = value.replace(/\.c0/gi, ".c"); // Replace '.c0' or '.C0' with '.c'

    // Update the email value
    email = value;
  }
</script>

<main class="center-card">
  <div class="gradient-outline-text pb-5">OBRA</div>
  <div class="container d-flex justify-content-center">
    <div class="card bg-color text-white" style="width: 806px; height: 700px;">
      <div class="py-5 text-center">
        <h4 class="gradient-text">FORGOT PASSWORD</h4>
      </div>
      <div class="px-5 card-body">
        {#if message}
          <div id="message-reset" class={`alert ${alertType}`} role="alert">
            {message}
          </div>
        {/if}
        <div class="h-100">
          <form on:submit|preventDefault={handleReset} id="reset-form">
            <div>
              <div class="form-group">
                <label for="email_reset">Email</label>
                <input
                  type="email"
                  class="form-control input-bg"
                  id="email_reset"
                  name="email_reset"
                  bind:value={email}
                  on:input={handleEmailInput}
                />
              </div>
              <div class="d-flex justify-content-center my-5 py-5">
                <button type="submit" class="btn btn-style">
                  SEND VERIFICATION
                </button>
              </div>
            </div>
          </form>
          <div class="d-flex justify-content-center my-5 py-5">
            <button class="btn btn-dark text-center">
              <a href="/">Proceed to Login</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  /* Add your custom styles here */
</style>
