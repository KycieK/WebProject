<template>
<div>
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
      <a class="navbar-brand" href="/">ZOZO</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li class="nav-item"><router-link class="nav-link active" aria-current="page" to="/">Home</router-link></li>
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Calendar</a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li class="dropdown-item"><router-link class="nav-link" to="/calendar">Go to Calendar</router-link></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li class="dropdown-item"><a class="nav-link" href="#!">Link 2</a></li>
                  <li class="dropdown-item"><a class="nav-link" href="#!">Link 3</a></li>
              </ul>
          </li>
          <li class="nav-item"><router-link class="nav-link" to="/new-event">New Event</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/about">About Us</router-link></li>
        </ul>
        <form class="d-flex">
            <button class="btn btn-outline-dark" type="button" v-on:click="toggleSideBar">
                Account
            </button>
        </form>
      </div>
    </div>
  </nav>
  <router-view
  :inventory = "inventory"
  :addToCart = "addToCart"
  />
  <Sidebar
  v-if="showSideBar"
  :toggle = "toggleSideBar"
  :cart = "cart"
  :inventory = "inventory"
  :remove = "removeItem"
  />
  <!-- Footer -->
  <footer class="bg-dark text-white">
    <div class="container py-1 px-lg-5">
      <div class="py-4 row row-cols-md-4">
        <div class="col-mb3">
            <h5>Logo</h5>
        </div>
        <div class="col-mb3">
        </div>
        <div class="col-mb3">
            <h5>Quick Links</h5>
            <ul class="nav flex-column">
                <li class="nav-item"><a class="text-decoration-none text-muted" href="/">Home</a></li>
                <li class="nav-item"><a class="text-decoration-none text-muted" href="/calendar">Calendar</a></li>
                <li class="nav-item"><a class="text-decoration-none text-muted" href="/about">About Us</a></li>
            </ul>
        </div>
        <div class="col-mb3">
            <h5>Events</h5>
            <ul class="nav flex-column">
              <li class="nav-item"><a class="text-decoration-none text-muted" href="/new-event">Create New Event</a></li>
            </ul>
        </div>
      </div>
      <div class="d-flex justify-content-center border-top">
          <p class="py-4 text-muted">© 2023 ZOZO Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
</div>
</template>

<script>
import Sidebar from './components/SideBar.vue'
export default {
  components: {
    Sidebar
  },
  data () {
    return {
      showSideBar: false,
      cart: {}
    }
  },
  methods: {
    toggleSideBar () {
      this.showSideBar = !this.showSideBar
    },
    removeItem (name) {
      delete this.cart[name]
    }
  },
  computed: {
    totalQuantity () {
      return Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr
      }, 0)
    }
  }
}
</script>
