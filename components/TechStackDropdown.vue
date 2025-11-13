<template>
  <div class="relative inline-block">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-200"
    >
      <Icon name="uil:layer-group" class="text-xl" />
      <span class="font-semibold">Tech Stack</span>
      <Icon :name="isOpen ? 'uil:angle-up' : 'uil:angle-down'" class="text-lg" />
    </button>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div
        v-show="isOpen"
        class="absolute z-10 mt-2 w-64 bg-base-dark border border-primary border-opacity-20 rounded-2xl shadow-xl p-3"
      >
        <div class="flex flex-wrap gap-2">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<style>
</style>
