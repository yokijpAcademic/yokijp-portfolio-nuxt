<template>
  <nav class="py-6 flex justify-between items-center">
    <div class="text-2xl font-bold">
      Yoki J Perkasa
    </div>

    <button
      @click="toggleLanguage"
      class="flex items-center gap-2 px-4 py-2 bg-white text-base-dark rounded-full hover:scale-105 transition-transform duration-300"
    >
      <Icon :name="currentLanguage === 'id' ? 'circle-flags:id' : 'circle-flags:us'" class="text-xl" />
      <span class="font-semibold">{{ currentLanguage === 'id' ? 'ID' : 'EN' }}</span>
    </button>
  </nav>
</template>

<script setup>
const { currentLanguage, toggleLanguage } = useLanguage()
</script>

<style>
</style>