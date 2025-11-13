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

      <div class="flex flex-col md:flex-row gap-10 md:w-3/5">
        <h2 class="text-lg">
          {{ t({
            id: 'Terjun ke dunia desain, saya memiliki hak istimewa untuk bekerja pada berbagai proyek, masing-masing meninggalkan jejak yang unik.',
            en: "Diving into the world of design, I've had the privilege of working on diverse projects, each leaving a unique mark."
          }) }}
        </h2>

        <h2 class="text-lg">
          {{ t({
            id: 'Pendekatan saya didorong oleh komitmen untuk menangkap esensi setiap proyek, baik itu desain web, branding, atau materi cetak.',
            en: "My approach is driven by a commitment to capture the essence of each project, whether it's web design, branding, or print materials."
          }) }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useLanguage()
</script>

<style></style>
