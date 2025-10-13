<template>
  <!-- Container -->
  <div class="min-h-screen py-4 md:py-10 b-primary flex max-w-full">
    <!-- Container Content -->
    <div class="w-full mx-auto flex flex-col md:flex-row gap-10 items-center">
      <!-- Left Content -->
      <div class="flex flex-col w-full space-y-10">
        <h1
          class="text-4xl md:text-6xl font-semibold leading-tight md:text-nowrap"
        >
          Software Engineer &<br />
          Fullstack Developer
        </h1>

        <!-- <div class="px-6 py-2 bg-white w-fit">
          <p class="text-lg font-light text-base-dark">Yoki J Perkasa</p>
        </div> -->

        <p class="text-lg text-primary">
          <span class="font-bold">Halo!</span> Saya
          <span class="px-2 py-1 bg-white text-base-dark">Yoki J Perkasa</span>
          punya keahlian khusus di pengembangan aplikasi mobile dan website,
          menggabungkan pengetahuan teknis dan kreativitas untuk menciptakan
          solusi digital yang berdampak.
        </p>

        <!-- CTA & Social -->
        <div class="flex items-center gap-10 flex-wrap">
          <!-- View Projects Button -->
          <button
            class="w-28 h-28 rounded-full text-black bg-white font-semibold text-sm"
          >
            DOWNLOAD<br />RESUME
          </button>

          <!-- Icons -->
          <div class="flex gap-4 text-white text-2xl">
            <Icon
              name="uil:linkedin"
              class="hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1"
            />
            <Icon
              name="uil:twitter"
              class="hover:text-sky-400 transition-all duration-300 transform hover:-translate-y-1"
            />
            <Icon
              name="uil:facebook-f"
              class="hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1"
            />
            <Icon
              name="uil:instagram"
              class="hover:text-pink-500 transition-all duration-300 transform hover:-translate-y-1"
            />
            <Icon
              name="uil:dribbble"
              class="hover:text-pink-400 transition-all duration-300 transform hover:-translate-y-1"
            />
            <Icon
              name="uil:github"
              class="hover:text-gray-600 transition-all duration-300 transform hover:-translate-y-1"
            />
          </div>
        </div>
      </div>

      <!-- ---------------------------- -->

      <!-- Right Content -->
      <div class="flex w-full md:w-1/2 md:max-w-1/2">
        <img
          src="~/assets/images/hero-yokijp.jpg"
          alt="Profile"
          class="rounded-2xl w-full object-cover shadow-lg"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// Border Class
const borderPrimary = "border border-primary";
const borderBlue = "border border-blue";
const borderGreen = "border border-green";
const borderRed = "border border-red";
const borderYellow = "border border-yellow";
</script>

<style>
/* Border Class */
.bp {
  border: 1px solid #f7f5ed;
}
.bb {
  border: 1px solid #3b82f6;
}
.bg {
  border: 1px solid #16a34a;
}
.br {
  border: 1px solid #ef4444;
}
.by {
  border: 1px solid #facc15;
}
</style>
