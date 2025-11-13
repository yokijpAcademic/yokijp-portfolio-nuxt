<template>
  <div>
    <HeroSection />
    <AboutMeSection />
    <ServicesSection />
    <ProjectsSections />
    <CtaSection />
    <BlogSection />
  </div>
</template>

<script setup>
import HeroSection from "../components/sections/HeroSection.vue";
import AboutMeSection from "../components/sections/AboutMeSection.vue";
import ServicesSection from "../components/sections/ServicesSection.vue";
import ProjectsSections from "../components/sections/ProjectsSectionsNew.vue";
import CtaSection from "../components/sections/CtaSection.vue";
import BlogSection from "../components/sections/BlogSection.vue";
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
