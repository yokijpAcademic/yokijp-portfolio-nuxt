<template class="display-hide"></template>
  <div class="min-h-screen py-4 md:py-10 b-primary flex max-w-full">
    <!-- Container Content -->
    <div class="w-full mx-auto flex flex-col gap-10">
      <TitleSection>{{ t({ id: 'Wawasan Terbaru', en: 'Latest Insights' }) }}</TitleSection>

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
              {{ t({
                id: 'Membangun Aplikasi Android Modern dengan Kotlin',
                en: 'Building Modern Android Apps with Kotlin'
              }) }}
            </h3>
            <p class="text-gray-300">
              {{ t({
                id: 'Panduan lengkap menggunakan Kotlin untuk pengembangan aplikasi Android yang efisien dan scalable.',
                en: 'A complete guide to using Kotlin for efficient and scalable Android app development.'
              }) }}
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
              {{ t({
                id: 'Tips Optimasi Performa Website dengan Nuxt 3',
                en: 'Website Performance Optimization Tips with Nuxt 3'
              }) }}
            </h3>
            <p class="text-gray-300">
              {{ t({
                id: 'Teknik-teknik praktis untuk meningkatkan kecepatan dan performa aplikasi web Anda.',
                en: 'Practical techniques to improve the speed and performance of your web applications.'
              }) }}
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
              {{ t({
                id: 'Best Practices dalam Desain UI/UX untuk Mobile App',
                en: 'Best Practices in UI/UX Design for Mobile Apps'
              }) }}
            </h3>
            <p class="text-gray-300">
              {{ t({
                id: 'Prinsip-prinsip desain yang membuat aplikasi mobile Anda lebih user-friendly dan menarik.',
                en: 'Design principles that make your mobile applications more user-friendly and engaging.'
              }) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useLanguage()
</script>

<style></style>
