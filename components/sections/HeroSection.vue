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
          {{ t({ id: 'Software Engineer &', en: 'Software Engineer &' }) }}<br />
          {{ t({ id: 'Fullstack Developer', en: 'Fullstack Developer' }) }}
        </h1>

        <!-- <div class="px-6 py-2 bg-white w-fit">
          <p class="text-lg font-light text-base-dark">Yoki J Perkasa</p>
        </div> -->

        <p class="text-lg text-primary">
          <span class="font-bold">{{ t({ id: 'Halo!', en: 'Hello!' }) }}</span> {{ t({ id: 'Saya', en: 'I am' }) }}
          <span class="px-2 py-1 bg-white text-base-dark">Yoki J Perkasa</span>
          {{ t({
            id: 'punya keahlian khusus di pengembangan aplikasi mobile dan website, menggabungkan pengetahuan teknis dan kreativitas untuk menciptakan solusi digital yang berdampak.',
            en: 'with specialized expertise in mobile and web application development, combining technical knowledge and creativity to create impactful digital solutions.'
          }) }}
        </p>

        <!-- CTA & Social -->
        <div class="flex items-center gap-10 flex-wrap">
          <!-- View Projects Button -->
          <a
            href="/resume.pdf"
            download="Yoki_J_Perkasa_Resume.pdf"
            class="w-28 h-28 rounded-full text-black bg-white font-semibold text-sm flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer text-center"
          >
            {{ t({ id: 'DOWNLOAD', en: 'DOWNLOAD' }) }}<br />{{ t({ id: 'RESUME', en: 'RESUME' }) }}
          </a>

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
const { t } = useLanguage()
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
