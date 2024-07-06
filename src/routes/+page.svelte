<script>
  // @ts-ignore
  import { authStore, authHandlers } from "../store/store";
  import { goto } from "$app/navigation";
  // @ts-ignore
  import { get } from "svelte/store";

  let email = "";
  let password = "";
  let message = "";
  let alertType = "";

  // Function to handle input validation for email
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

  // Function to handle form submission
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await authHandlers.login(email, password);
      showMessage("Login successful", "alert-success");
      goto("/dashboard");
    } catch (error) {
      const errorMessage = error.message;
      console.error(errorMessage);
      showMessage(errorMessage, "alert-danger");
    }
  }

  // Function to display messages
  function showMessage(msg, type) {
    message = msg;
    alertType = type;
    setTimeout(() => {
      message = "";
      alertType = "";
    }, 5000); // Hide message after 5 seconds
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
              on:input={handleEmailInput}
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
