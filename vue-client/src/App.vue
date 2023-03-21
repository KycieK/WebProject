<template>
<div>
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #2C5663;">
    <div class="container px-4 px-lg-5">
      <a class="navbar-brand " href="/"><img class="rounded-circle" height="100" src="./assets/images/logo-nav.png"></a>
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
          <li class="nav-item " v-if="!user"><router-link class="nav-link" to="/user">Register</router-link></li>
          <li class="nav-item " v-if="!user"><router-link class="nav-link" to="/login">Login</router-link></li>
          <li class="nav-item " v-if="user"><span class="nav-link" @click="logout" style="cursor:pointer">Logout</span></li>
        </ul>
        <form class="d-flex">
            <button class="btn btn-outline-light" type="button" v-on:click="toggleSideBar">
                Account
            </button>
        </form>
      </div>
    </div>
  </nav>
  <router-view
  :user = "user"
  />
  <Sidebar
  v-if="showSideBar"
  :toggle = "toggleSideBar"
  :cart = "cart"
  :inventory = "inventory"
  :remove = "removeItem"
  />
  <!-- Footer -->
  <footer class="text-white" style="background-color: #2C5663;">
    <div class="container py-1 px-lg-5">
      <div class="py-4 row row-cols-md-4">
        <div class="col-mb3 px-lg-5">
          <img class="rounded" height="200" src="./assets/images/logo-footer.png">
        </div>
        <div class="col-mb3">
        </div>
        <div class="col-mb3">
            <h5 class="fw-bold">Quick Links</h5>
            <ul class="nav flex-column">
                <li class="nav-item"><a class="text-decoration-none text-white" href="/">Home</a></li>
                <li class="nav-item"><a class="text-decoration-none text-white" href="/calendar">Calendar</a></li>
                <li class="nav-item"><a class="text-decoration-none text-white" href="/about">About Us</a></li>
            </ul>
        </div>
        <div class="col-mb3">
            <h5 class="fw-bold">Events</h5>
            <ul class="nav flex-column">
              <li class="nav-item"><a class="text-decoration-none text-white" href="/new-event">Create New Event</a></li>
            </ul>
        </div>
      </div>
      <div class="d-flex justify-content-center border-top">
          <p class="py-4 text-white">© 2023 ZOZO Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
</div>
</template>

<script>
import Sidebar from './components/SideBar.vue'
import UserDataService from '@/services/UserDataService'

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
    userConnect () {
      if (this.user) {
        this.$router.push('/login')
      } else {
        this.toggleSideBar()
      }
    },
    removeItem (name) {
      delete this.cart[name]
    },
    logout () {
      UserDataService.getLogout()
        .then(response => {
          localStorage.removeItem('token')
          this.$store.dispatch('user', null)
          this.$router.push('login')
        })
    }
  },
  //  computed:{},
  created () {
    UserDataService.getAuth()
      .then(response => {
        this.name = response.data.fullname
        this.$store.dispatch('user', response.data)
      })
      .catch(e => {
        this.$store.dispatch('user', null)
      })
  }
}
</script>
