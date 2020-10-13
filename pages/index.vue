<template>
  <div class="bg-primary">
    <Nav />
    <Banner />
    <Stores />
    <Benefits />
    <More />
  </div>
</template>

<script>
import Banner from '../components/Banner'
import Nav from '../components/Nav'
import Stores from '../components/Stores'
import Benefits from '../components/Benefits'
import More from '../components/More'
  export default {
    components: {
      Nav,
      Banner,
      Stores,
      Benefits,
      More
    }
  }
</script>

<style lang="scss" scoped>

</style>