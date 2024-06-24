<script>
  import { auth } from "$lib/firebase"; // Adjust the import path as needed
  import { signInWithEmailAndPassword } from "firebase/auth";
  import { onMount } from "svelte";

  let email = "";
  let password = "";
  let message = "";
  let alertType = "";

  function showMessage(msg, type) {
    message = msg;
    alertType = type;
    setTimeout(() => {
      message = "";
      alertType = "";
    }, 5000); // Hide message after 5 seconds
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);

      showMessage("Login successful", "alert-success");

      // Optional: Redirect or perform additional actions after successful login
      // For example: navigate to another page
      window.location.href = "/dashboard";
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);

      showMessage(errorMessage, "alert-danger");
    }
  }
</script>

<main class="center-card">
  <div class="gradient-outline-text pb-5">OBRA</div>
  <div class="container d-flex justify-content-center">
    <div class="card bg-color text-white" style="width: 806px; height: 700px;">
      <div class="py-5 text-center">
        <h4 class="gradient-text">LOGIN</h4>
      </div>
      <div class="px-5 card-body">
        {#if message}
          <div id="message-login" class={`alert ${alertType}`} role="alert">
            {message}
          </div>
        {/if}
        <form id="login-form" on:submit={handleSubmit}>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              bind:value={email}
              type="email"
              class="form-control input-bg"
              id="email"
              name="email"
              required
            />
          </div>
          <div class="form-group py-5">
            <label for="password">Password</label>
            <input
              bind:value={password}
              type="password"
              class="form-control input-bg"
              id="password"
              name="password"
              required
            />
          </div>
          <div class="d-flex justify-content-end py-3">
            <a href="/forgot">Forgot Password?</a>
          </div>
          <div class="d-flex justify-content-center py-5">
            <button type="submit" class="btn btn-style">LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</main>
