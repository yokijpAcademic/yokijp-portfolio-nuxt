<template>
  <!-- Container -->
  <div class="min-h-screen py-4 md:py-0 md:pt-10 b-primary flex max-w-full">
    <!-- Container Content -->
    <div class="w-full mx-auto flex flex-col md:flex-col gap-10">
      <h1 class="text-5xl font-medium">{{ t({ id: 'Layanan', en: 'Services' }) }}</h1>
      <!-- Grid Container Services -->
      <div class="flex flex-col md:grid md:grid-cols-3 gap-5 h-full">
        <ServiceCard>
          <template #icon>
            <Icon name="uil:analysis" class="text-2xl" />
          </template>
          <template #number>01</template>
          <template #title>{{ t({ id: 'Analisis', en: 'Analysis' }) }}</template>
          <template #description>{{ t({
            id: 'Menganalisa apa yang dibutuhkan anda, memahami kebutuhan anda dengan baik, dan memberikan solusi yang tepat.',
            en: 'Analyzing what you need, understanding your requirements well, and providing the right solutions.'
          }) }}</template
          >
        </ServiceCard>
        <ServiceCard>
          <template #icon>
            <Icon name="uil:palette" class="text-2xl" />
          </template>
          <template #number>02</template>
          <template #title>{{ t({ id: 'Desain UI', en: 'UI Design' }) }}</template>
          <template #description>{{ t({
            id: 'Mendesain pengalaman yang memikat pengguna sejak klik pertama. Antarmuka intuitif yang menghasilkan interaksi yang lancar.',
            en: 'Designing captivating user experiences from the first click. Intuitive interfaces that produce smooth interactions.'
          }) }}</template
          >
        </ServiceCard>
        <ServiceCard>
          <template #icon>
            <Icon name="uil:code" class="text-2xl" />
          </template>
          <template #number>03</template>
          <template #title>{{ t({ id: 'Pengembangan', en: 'Development' }) }}</template>
          <template #description>{{ t({
            id: 'Membuat visi menjadi solusi digital yang dinamis. Dari situs web responsif hingga aplikasi interaktif...',
            en: 'Turning vision into dynamic digital solutions. From responsive websites to interactive applications...'
          }) }}</template>
        </ServiceCard>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useLanguage()
</script>

<style></style>
