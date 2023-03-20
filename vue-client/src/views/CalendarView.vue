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
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5 justify-content-between">
        <div class="container border">
          <vue-cal
          :disable-views="['years', 'year']"
          :time-from="8 * 60"
          :time-to="23 * 60"
          :events="events"
          :on-event-click="onEventClick"
          events-on-month-view="short"
          class="vuecal--blue-theme"
          style="height: 750px"
          />
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
      events: []
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
      console.log('Fetching events...')
      const response = await axios.get('http://localhost:8080/api/sportevent')
      console.log('Events fetched:', response.data)
      this.events = response.data.map((event) => ({
        name: event.name,
        start: new Date(event.preciseDate),
        end: new Date(event.end),
        class: event.class,
        content: event.content,
        contentFull: event.contentFull
      }))
      console.log(this.events)
    } catch (error) {
      console.error('Error fetching events:', error)
    }
  }
}
</script>
