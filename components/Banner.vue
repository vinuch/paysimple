<template>
  <div class="h-screen w-screen relat pl-24 pt-32 bg-primary overflow-hidden">
    <img class="w-full absolute left-0 top-0" src="../assets/bgpath1.svg" alt="svg vector">
    <img class="w-full absolute right-0 bg" src="../assets/bgpath2.svg" alt="svg vector">
    <div class="flex">
      <div class="w-11/12 mt-16 ">
        <h2 class="text-5xl mb-12 font-semibold text-secondary">Manage and grow your business <span class="text-simplifyYellow">offline</span> and <span class="text-simplifyYellow">online</span></h2>

        <p class="text-tgrey mb-6">
          Paysimple gives you a set of tools - fully functional POS, ecommerce 
          store , and business account, and much more so you can manage 
          and grow your business with ease
        </p>
        <p class="text-tgrey">
          Create an ecommerce website backed by powerful tools that help 
          you find customers, drive sales, and manage your day-to-day.
        </p>
        <div class="flex my-12">
          <input class="border-2 border-simplifyYellow p-4 w-9/12 rounded-tl-lg rounded-bl-lg" type="email" name="" id="" placeholder="Your email address">
          <button class="bg-simplifyYellow text-white px-6 py-2 rounded-tr-lg rounded-br-lg w-3/12">Get Started</button>
        </div>
        <span class="text-tgrey">Explore our mobile app</span>
        <div class="flex my-2">
          <img class="mr-2 w-" src="../assets/Googlebadge.svg" alt="">
          <img src="../assets/IOSBadge.svg" alt="">
        </div>
      </div>
      <div class="w-full flex justify-center items-center z-20">
        <img class="bannerimg" src="../assets/bannerimg.svg" alt="">
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
    width: 44rem
  }
</style>