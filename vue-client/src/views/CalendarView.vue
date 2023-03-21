<template>
  <div>
    <!-- Header-->
    <header class="bg-dark py-5">
      <div class="container px-4 px-lg-5 my-5">
        <div class="text-center text-white">
          <h1 class="display-4 fw-bolder">Calendar</h1>
          <p class="lead fw-normal text-white-50 mb-0">THE page to go</p>
        </div>
      </div>
    </header>
    <!-- Page Content-->
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5 justify-content-between">
        <div class="container border">
          <vue-cal
          :disable-views="['years', 'year']"
          :time-from="8 * 60"
          :time-to="23 * 60"
          :events="events"
          :on-event-click="onEventClick"
          :special-hours="specialHours"
          events-on-month-view="short"
          class="vuecal--blue-theme"
          style="height: 750px"
          />
          <div v-if="showDialog" class="dialog">
            <button class="close" @click="showDialog = false">X</button>
            <h2>Event details</h2>
            <div class="event-details">
              <span>{{ selectedEvent.title }} /</span>
              <strong>{{ selectedEvent.start && selectedEvent.start.format('DD/MM/YYYY') }}</strong>
              <p v-html="selectedEvent.contentFull" />
              <strong>Event details:</strong>
              <ul>
                <li>Event starts at: {{ selectedEvent.start && selectedEvent.start.formatTime() }}</li>
                <li>Event ends at: {{ selectedEvent.end && selectedEvent.end.formatTime() }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import axios from 'axios'

export default {
  components: {
    VueCal
  },
  data () {
    return {
      selectedEvent: {},
      showDialog: false,
      events: [],
      specialHours: {
        7: {
          from: 7 * 60,
          to: 23 * 60,
          class: 'closed',
          label: 'Closed'
        }
      }
    }
  },
  methods: {
    onEventClick (event, e) {
      this.selectedEvent = event
      this.showDialog = true

      // Prevent navigating to narrower view (default vue-cal behavior).
      e.stopPropagation()
    }
  },
  async created () {
    try {
      const response = await axios.get('http://localhost:8080/api/sportevent')
      this.events = response.data.map((event) => {
        const startDate = new Date(event.preciseDate)
        const endDate = new Date(startDate)
        let icon = ''
        endDate.setMinutes(startDate.getMinutes() + event.duration * 60)
        // Initialize the object class based on the event type with a switch case.
        switch (event.sportType) {
          case 'Football':
            event.class = 'football'
            icon = '<i class="fa-solid fa-futbol"></i>'
            break
          case 'Basketball':
            event.class = 'basketball'
            icon = '<i class="fa-solid fa-basketball"></i>'
            break
          case 'Tennis':
            event.class = 'tennis'
            icon = '<i class="fa-solid fa-table-tennis-paddle-ball"></i>'
            break
          case 'Volleyball':
            event.class = 'volleyball'
            icon = '<i class="fa-solid fa-volleyball"></i>'
            break
          case 'Hockey':
            event.class = 'hockey'
            icon = '<i class="fa-solid fa-hockey-puck"></i>'
            break
          case 'Rugby':
            event.class = 'rugby'
            icon = '<i class="fa-solid fa-rugby-ball"></i>'
            break
          default:
            event.class = 'other'
        }

        return {
          title: event.name,
          start: startDate,
          end: endDate,
          class: event.class,
          content: icon,
          max: event.maxAmountofPlayer
        }
      })
      console.log(this.events)
    } catch (error) {
      console.error('Error fetching events:', error)
    }
  }
}
</script>
