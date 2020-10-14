<template>
  <div class="h-fu w-screen relat sm:pl-24 pt-32 pb-12 bg-primary overflow-hidden">
    <img class="w-full absolute left-0 top-0" src="../assets/bgpath1.svg" alt="svg vector">
    <img class="w-full absolute right-0 bg" src="../assets/bgpath2.svg" alt="svg vector">
    <div class="flex flex-wrap items-start ">
      <div class="sm:w-6/12 px-4 mt-16 ">
        <h2 class="text-4xl sm:text-5xl mb-12 font-semibold text-secondary">Manage and grow your business <span class="text-simplifyYellow">offline</span> and <span class="text-simplifyYellow">online</span></h2>

        <p class="text-tgrey mb-6">
          Paysimple gives you a set of tools - fully functional POS, ecommerce 
          store , and business account, and much more so you can manage 
          and grow your business with ease
        </p>
        <p class="text-tgrey">
          Create an ecommerce website backed by powerful tools that help 
          you find customers, drive sales, and manage your day-to-day.
        </p>
        <div class="flex flex-wrap items-center  my-12">
          <input class="border-2 bg-white border-simplifyYellow px-4 w-full h-16 sm:w-9/12 z-50  sm:rounded-tl-lg sm:rounded-bl-lg my-" type="email" name="" id="" placeholder="Your email address">
          <button class="bg-simplifyYellow z-50 text-white h-16 md:rounded-tr-lg my-2 md:rounded-br-lg w-full sm:w-3/12 ">Get Started</button>
        </div>
      </div>
      <div class="order-last w-full self-start lg:-mt-">
        <p class="text-tgrey text-center sm:text-left">Explore our mobile app</p>
        <div class="flex justify-center sm:justify-start my-2">
          <img class="mr-2 w-" src="../assets/Googlebadge.svg" alt="">
          <img src="../assets/IOSBadge.svg" alt="">
        </div>
      </div>
      <div class="sm:w-6/12 flex justify-center items-center z-20">
        <img class="bannerimg" src="../assets/banner.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .bg {
    top: -10rem;
  }
  .bannerimg{
  }
</style>