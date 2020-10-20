<template>
  <div class="absolute z-40 flex justify-between w-full px-4 py-10 sm:px-24 sm:mx-6">
    <div class=" ">
      <img class="w-32" src="../assets/PaySimplelogo.png" alt="paysimple logo">
    </div>
      <img @click="toggle" class="sm:hidden block" src="../assets/bars.svg" alt="menu icon">
      <transition name="fade">
        <div v-if="navIsOpen" class=" transition duration-500 ease-in-out transform w-screen bg-white h-56 absolute left-0 top-0 z-30 ">
          <div class="flex pt-10 pb-4 px-6 justify-between items-start">
            <img class="w-32" src="../assets/PaySimplelogo.png" alt="paysimple logo">
            <img @click="toggle" class="w-6" src="../assets/cross.svg" alt="paysimple logo">
          </div>
          <ul class="px-6">
            <li class="my-4">
              <button class="text-lg mx-4 cursor-pointer">Login</button>
            </li>
            <li class="my-4">
              <button class="text-white text-lg rounded-full bg-secondary px-8 mx-4 py-2 cursor-pointer">
              Get Started
            </button>
            </li>
          </ul>
        </div>
      </transition>
    <div v-if="navIsOpen"  class="h-screen w-screen absolute bg-gray-400 top-0 left-0 opacity-50 overflow-y-hidden"></div>
    <div class="hidden sm:block">
        <button class="text-white text-lg rounded-full bg-secondary px-8 mx-4 py-2 cursor-pointer">
          Get Started
        </button>

        <button class="text-lg mx-4 cursor-pointer">Login</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['navIsOpen'],
    methods: {
      toggle() {
        this.$emit('toggle')
        console.log('hh')
      }
    }
  }

</script>

<style scoped>
.fade-enter, .fade-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>