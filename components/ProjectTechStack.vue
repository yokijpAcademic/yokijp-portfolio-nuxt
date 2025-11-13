<template>
  <div class="flex flex-col gap-6">
    <div class="flex items-center gap-4">
      <h3 class="text-xl font-semibold">{{ title }}</h3>
      <TechStackDropdown>
        <slot></slot>
      </TechStackDropdown>
    </div>
    <p class="text-gray-300">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String
})
</script>

<style>
</style>
