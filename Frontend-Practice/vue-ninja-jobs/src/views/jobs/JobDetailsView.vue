<template>
  <div class="jobdetails" v-if="job">
    <h1>{{ job.title }}</h1>
    <p>The job id is {{ id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <p>Loading job details...</p>
  </div>
</template>

<script>
export default {
  props: [ 'id' ],
  data() {
    return {
      job: null
      // id: this.$route.params.id,
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs/' + this.id) 
      .then(res => res.json())
      .then(data => { this.job = data; console.log(this.job);})
      .catch(err => console.log(err.message))
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .jobdetails {
    min-height: 100vh;
  }
}
</style>
