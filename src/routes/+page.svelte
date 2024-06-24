<main class="center-card">
  <div class="gradient-outline-text pb-5">OBRA</div>
  <div class="container d-flex justify-content-center">
    <div class="card bg-color text-white" style="width: 806px; height: 700px;">
      <div class="py-5 text-center">
        <h4 class="gradient-text">LOGIN</h4>
      </div>
      <div class="px-5 card-body">
        <div id="message-login"></div>
        <form method="POST" id="login-form">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control input-bg"
              id="email"
              name="email"
            />
          </div>
          <div class="form-group py-5">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control input-bg"
              id="password"
              name="password"
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
