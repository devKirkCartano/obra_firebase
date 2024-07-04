<script>
  function helloworld() {
    console.log("Hello World");
  }
</script>

<header class="d-flex justify-content-end align-items-center">
  <div class="mx-5">
    <span class="mx-3" id="notif-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="#fff"
        class="bi bi-bell-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"
        />
      </svg>
    </span>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-interactive-supports-focus -->
    <span
      class="mx-3 position-relative"
      id="profile-icon"
      role="button"
      on:click={helloworld}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="#fff"
        class="bi bi-person-circle"
        viewBox="0 0 16 16"
      >
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
        <path
          fill-rule="evenodd"
          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
        />
      </svg>
      <div
        class="card dropdown-option position-absolute text-white m-0 px-0 d-none"
      >
        <div class="d-flex justify-content-center align-items-center item">
          <span
            class="d-inline-block ms-3 rounded-circle p-2"
            style="background-color: #22242E;"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="27"
              viewBox="0 0 24 27"
              fill="none"
            >
              <path
                d="M12 2.04V10.5378M6.99401 5.77902C6.50619 6.12639 6.05137 6.52341 5.63601 6.96446C4.32451 8.35801 3.45043 10.148 3.1334 12.0895C2.81636 14.0309 3.07185 16.0291 3.86491 17.8104C4.65797 19.5917 5.94984 21.0692 7.56375 22.0407C9.17767 23.0122 11.0348 23.4302 12.8809 23.2375C14.7271 23.0449 16.4721 22.251 17.8772 20.9644C19.2822 19.6779 20.2787 17.9616 20.7303 16.0504C21.1818 14.1392 21.0664 12.1265 20.3997 10.2877C19.733 8.44884 18.5477 6.87376 17.006 5.77796"
                stroke="url(#paint0_angular_2037_1877)"
                stroke-width="2"
              />
              <defs>
                <radialGradient
                  id="paint0_angular_2037_1877"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(12.001 12.6617) rotate(90) scale(10.6217 9)"
                >
                  <stop stop-color="#7C2F87" />
                  <stop offset="0.145" stop-color="#D42469" />
                  <stop offset="0.295" stop-color="#EB3D45" />
                  <stop offset="0.445" stop-color="#C05558" />
                  <stop offset="0.57" stop-color="#ED7D3F" />
                  <stop offset="0.745" stop-color="#E5A73D" />
                  <stop offset="0.86" stop-color="#EA7C3F" />
                  <stop offset="1" stop-color="#E7AB3E" />
                </radialGradient>
              </defs>
            </svg>
          </span>
          <span class="mx-3">Logout</span>
        </div>
      </div>
    </span>
  </div>
</header>
