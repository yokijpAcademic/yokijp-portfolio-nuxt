<template>
  <!-- Container -->
  <div class="min-h-screen py-4 md:py-10 b-primary flex max-w-full">
    <!-- Container Content -->
    <div class="w-full mx-auto flex flex-col gap-10">
      <TitleSection>Latest Insights</TitleSection>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Blog Card 1 -->
        <div class="flex flex-col gap-4 group cursor-pointer">
          <div class="bg-gray-700 rounded-2xl overflow-hidden aspect-video">
            <div
              class="w-full h-full flex items-center justify-center text-gray-500"
            >
              <Icon name="uil:image" class="text-6xl" />
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-sm text-gray-400">15 Mar 2024</span>
            <h3
              class="text-xl font-semibold group-hover:text-blue-400 transition-colors"
            >
              Membangun Aplikasi Android Modern dengan Kotlin
            </h3>
            <p class="text-gray-300">
              Panduan lengkap menggunakan Kotlin untuk pengembangan aplikasi
              Android yang efisien dan scalable.
            </p>
          </div>
        </div>

        <!-- Blog Card 2 -->
        <div class="flex flex-col gap-4 group cursor-pointer">
          <div class="bg-gray-700 rounded-2xl overflow-hidden aspect-video">
            <div
              class="w-full h-full flex items-center justify-center text-gray-500"
            >
              <Icon name="uil:image" class="text-6xl" />
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-sm text-gray-400">08 Mar 2024</span>
            <h3
              class="text-xl font-semibold group-hover:text-blue-400 transition-colors"
            >
              Tips Optimasi Performa Website dengan Nuxt 3
            </h3>
            <p class="text-gray-300">
              Teknik-teknik praktis untuk meningkatkan kecepatan dan performa
              aplikasi web Anda.
            </p>
          </div>
        </div>

        <!-- Blog Card 3 -->
        <div class="flex flex-col gap-4 group cursor-pointer">
          <div class="bg-gray-700 rounded-2xl overflow-hidden aspect-video">
            <div
              class="w-full h-full flex items-center justify-center text-gray-500"
            >
              <Icon name="uil:image" class="text-6xl" />
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-sm text-gray-400">01 Mar 2024</span>
            <h3
              class="text-xl font-semibold group-hover:text-blue-400 transition-colors"
            >
              Best Practices dalam Desain UI/UX untuk Mobile App
            </h3>
            <p class="text-gray-300">
              Prinsip-prinsip desain yang membuat aplikasi mobile Anda lebih
              user-friendly dan menarik.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
