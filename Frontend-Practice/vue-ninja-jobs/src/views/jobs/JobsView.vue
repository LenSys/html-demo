<template>
  <div class="jobs">
    <h1>Jobs</h1>
    <div v-if="jobs.length">
      <div v-for="job in jobs" :key="job.id" class="job">
        
        <RouterLink :to="{ name: 'jobdetails', params: { id: job.id } }"><h2>{{ job.title }}</h2></RouterLink>
      </div>
    </div>
    <div v-else>
      <p>Loading jobs...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs') 
      .then(res => res.json())
      .then(data => this.jobs = data)
      .catch(err => console.log(err.message))
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
