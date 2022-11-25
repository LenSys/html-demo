<template>
  <div class="jobs">
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id" class="job">
      
      <RouterLink :to="{ name: 'jobdetails', params: { id: job.id } }"><h2>{{ job.title }}</h2></RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: "Ninja UX Designer", id: 1, details: "lorem" },
        { title: "Ninja Web Developer", id: 2, details: "lorem" },
        { title: "Ninja Vue Developer", id: 3, details: "lorem" }
      ]
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .jobs {
    min-height: 100vh;
  }
}
</style>
