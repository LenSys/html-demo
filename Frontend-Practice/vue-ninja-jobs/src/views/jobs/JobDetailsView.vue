<template>
  <div class="jobdetails">
    <h1>Job Details page</h1>
    <p>The job id is {{ id }}</p>
  </div>
</template>

<script>
export default {
  props: [ 'id' ],
  data() {
    return {
      // id: this.$route.params.id,
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
  .jobdetails {
    min-height: 100vh;
  }
}
</style>
