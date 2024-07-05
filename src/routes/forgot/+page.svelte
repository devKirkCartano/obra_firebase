<script>
  // @ts-ignore
  import { onMount } from "svelte";
  import { getAuth, sendPasswordResetEmail } from "firebase/auth";

  let email = "";
  // @ts-ignore
  let password = "";
  let message = "";
  let alertType = "";
  // @ts-ignore
  function showMessage(msg, type) {
    message = msg;
    alertType = type;
    setTimeout(() => {
      message = "";
      alertType = "";
    }, 5000); // Hide message after 5 seconds
  }

  async function handleReset() {
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      // Handle success, show message to user
      showMessage("Password reset email sent successfully", "alert-success");

      console.log("Password reset email sent successfully");
    } catch (error) {
      // @ts-ignore
      const errorMessage = error.message;

      // Handle error, show error message to user
      showMessage(errorMessage, "alert-danger");

      console.error(error);
    }
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
          <div id="message-login" class={`alert ${alertType}`} role="alert">
            {message}
          </div>
        {/if}
        <div class="h-100">
          <form on:submit|preventDefault={handleReset} id="reset-form">
            <div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  class="form-control input-bg"
                  id="email_reset"
                  name="email_reset"
                  bind:value={email}
                />
              </div>
              <div class="d-flex justify-content-center my-5 py-5">
                <button type="submit" class="btn btn-style"
                  >SEND VERIFICATION</button
                >
              </div>
            </div>
          </form>
          <div class="d-flex justify-content-center my-5 py-5">
            <button class="btn btn-dark text-center"
              ><a href="/">Proceed to Login</a></button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  /* Add your custom styles here */
</style>
