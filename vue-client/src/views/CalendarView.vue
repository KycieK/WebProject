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
                <vue-cal :disable-views="['years', 'year']" :time-from="8 * 60" :time-to="23 * 60" class="vuecal--blue-theme" style="height: 750px"/>
            </div>
          </div>
        </section>
    </div>
</template>
<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
export default {
  components: {
    VueCal
  }
}
</script>
