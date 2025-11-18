<template>
  <!-- Container -->
  <div
    class="min-h-screen py-4 md:py-10 b-primary flex max-w-full items-center"
  >
    <!-- Container Content -->
    <div class="w-full mx-auto flex flex-col gap-10 md:items-end">
      <h1 class="text-xl md:text-3xl md:w-3/5 tracking-wide">
        {{ t({
          id: 'Saya aktif berbagi pengetahuan sebagai asisten dosen untuk Pemrograman Android dan mengembangkan bisnis Software as a Service (SaaS) yang inovatif. Saat tidak berada di depan komputer, saya menikmati waktu untuk mengeksplorasi desain UI/UX atau mencari inspirasi baru melalui komunitas teknologi di Bandung.',
          en: 'I actively share knowledge as a teaching assistant for Android Programming and develop innovative Software as a Service (SaaS) businesses. When not in front of the computer, I enjoy exploring UI/UX design or finding new inspiration through the tech community in Bandung.'
        }) }}
      </h1>

    </div>
  </div>
</template>

<script setup>
const { t } = useLanguage()
</script>

<style></style>
