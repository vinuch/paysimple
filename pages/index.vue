<template>
  <div class="bg-primary" :class="navIsOpen ? 'overflow-y-hidden h-screen' : null">
    <Nav :navIsOpen="navIsOpen" @toggle="navIsOpen = !navIsOpen"/>
    <Banner />
    <Stores />
    <Benefits />
    <More />
    <Agency />
    <Footer />
  </div>
</template>

<script>
import Banner from '../components/Banner'
import Nav from '../components/Nav'
import Stores from '../components/Stores'
import Benefits from '../components/Benefits'
import More from '../components/More'
import Agency from '../components/Agency'
import ContactCard from '../components/ContactCard'
import Footer from '../components/Footer'
  export default {
    components: {
      Nav,
      Banner,
      Stores,
      Benefits,
      More,
      Agency,
      ContactCard,
      Footer
    },
    data() {
      return {
        navIsOpen: false
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>