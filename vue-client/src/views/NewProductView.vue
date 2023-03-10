<template>
<div>
  <header class="bg-dark py-3">
        <div class="container px-4 px-lg-5 my-5">
            <div class="text-center text-white">
                <h1 class="display-4 fw-bolder">Create your own event</h1>
                <p class="lead fw-normal text-white-50 mb-0">Complete the form below</p>
            </div>
        </div>
    </header>
    <div class="sportEvent-add">
      <!-- Section-->
      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div
            class="
              row
              gx-4 gx-lg-5
              row-cols-2 row-cols-md-3 row-cols-xl-2
              justify-content-center
            "
          >
            <div class="col-sm-12">
              <div class="needs-validation" novalidate>
                <div class="row g-2">
                  <div v-if=!submitted>
                  <div class="col-12">
                    <label for="eventName" class="form-label"
                      >Event Name</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="eventName"
                      v-model="sportEvent.name"
                      placeholder=""
                      required
                    />
                    <div class="invalid-feedback">Valid name is required.</div>
                  </div>
                  <div class="col-12">
                    <label for="eventDate" class="date"
                      >Date of the event</label
                    >
                    <input
                      type="date"
                      class="form-control"
                      id="eventDate"
                      v-model="sportEvent.preciseDate"
                      placeholder=""
                      required
                    />
                  </div>
                  <div class="col-12">
                    <label for="eventDescription" class="form-label"
                      >Event Description</label
                    >
                    <textarea
                      class="form-control"
                      id="eventDescription"
                      placeholder=""
                      v-model="sportEvent.eventDescription"
                    ></textarea>
                    <div class="invalid-feedback">Valid description</div>
                  </div>
                  <div class="col-12">
                    <label for="sportType" class="form-label"
                      >Sport Type</label
                    >
                    <select
                      class="form-control"
                      id="sportType"
                      placeholder=""
                      v-model="sportEvent.sportType"
                      required
                    >
                      <option value="Football">Football</option>
                      <option value="Volleyball">Volleyball</option>
                      <option value="Tennis">Tennis</option>
                      <option value="Hockey">Hockey</option>
                      <option value="Basketball">Basketball</option>
                      <option value="Rugby">Rugby</option>
                    </select>
                    <div class="invalid-feedback">
                      Valid photo path is required.
                    </div>
                    <div class="col-12">
                    <label for="AmountofPlayers" class="Max"
                      >Enter the maximum amount of participant</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      id="AmountofPlayers"
                      v-model="sportEvent.maxAmountofPlayer"
                      placeholder="0"
                      min = "0"
                    />
                  </div>
                  </div>
                  <button class="w-100 btn btn-secondary btn-lg mt-3" type="button"  @click="saveSportEvent()">Save </button>
                  </div>
                  <div v-else>
                    <div  class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong> You submitted successfully!</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    <button class="w-100 btn btn-success btn-lg mt-3" type="button" @click="newSportEvent()">New Event</button>
                  </div>
                  <hr class="my-4">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: ['addInv'],
  data () {
    return {
      submitted: false,
      sportEvent: {
        name: '',
        preciseDate: '',
        eventDescription: '',
        sportType: '',
        maxAmountofPlayer: ''
      }
    }
  },
  methods: {
    saveSportEvent () {
      this.addInv(this.sportEvent)
      console.log(this.sportEvent)
      this.submitted = true
    },
    newSportEvent () {
      this.submitted = false
      this.sportEvent = {}
    }
  }
}
</script>
