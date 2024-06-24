<main class="center-card">
  <div class="gradient-outline-text pb-5">OBRA</div>
  <div class="container d-flex justify-content-center">
    <div class="card bg-color text-white" style="width: 806px; height: 700px;">
      <div class="py-5 text-center">
        <h4 class="gradient-text">FORGOT PASSWORD</h4>
      </div>
      <div class="px-5 card-body">
        <div id="message-forgot"></div>
        <div class="h-100">
          <form action="/forgot" id="reset-form">
            <div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  class="form-control input-bg"
                  id="email_reset"
                  name="email_reset"
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
