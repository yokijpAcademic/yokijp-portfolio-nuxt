<template>
  <!-- Container -->
  <div class="min-h-screen py-4 md:py-10 b-primary flex max-w-full">
    <!-- Container Content -->
    <div
      class="w-full mx-auto flex flex-col gap-10 items-center justify-center text-center"
    >
      <h1 class="text-4xl md:text-6xl font-bold">
        {{ t({ id: 'Mari Berkolaborasi!', en: "Let's Collaborate!" }) }}<br />{{ t({ id: 'Wujudkan Ide Anda', en: 'Bring Your Ideas to Life' }) }}
      </h1>

      <p class="text-lg md:text-xl max-w-2xl">
        {{ t({
          id: 'Punya proyek menarik atau ingin berdiskusi tentang solusi digital? Saya siap membantu mewujudkan visi Anda menjadi kenyataan.',
          en: 'Have an interesting project or want to discuss digital solutions? I am ready to help turn your vision into reality.'
        }) }}
      </p>

      <div class="flex gap-6 flex-wrap justify-center">
        <button
          class="px-8 py-4 bg-white text-base-dark font-semibold rounded-full hover:scale-105 transition-transform duration-300"
        >
          {{ t({ id: 'Hubungi Saya', en: 'Contact Me' }) }}
        </button>
        <button
          class="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-base-dark transition-all duration-300"
        >
          {{ t({ id: 'Lihat Portfolio', en: 'View Portfolio' }) }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useLanguage()
</script>

<style></style>
