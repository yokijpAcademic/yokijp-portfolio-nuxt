<template>
  <!-- Container -->
  <div class="min-h-screen py-4 md:py-10 b-primary flex max-w-full">
    <!-- Container Content -->
    <div class="w-full mx-auto flex flex-col gap-10">
      <TitleSection>Clients & Partners</TitleSection>

      <div class="flex flex-col gap-16">
        <!-- Testimonial Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Testimonial 1 -->
          <div
            class="bg-white bg-opacity-5 p-8 rounded-2xl flex flex-col gap-4"
          >
            <div class="flex gap-2 text-yellow-400">
              <Icon name="uil:star" />
              <Icon name="uil:star" />
              <Icon name="uil:star" />
              <Icon name="uil:star" />
              <Icon name="uil:star" />
            </div>
            <p class="text-lg italic">
              "Kerja sama yang sangat profesional. Yoki berhasil mengembangkan
              aplikasi yang sesuai dengan kebutuhan bisnis kami dengan waktu
              yang tepat."
            </p>
            <div class="flex items-center gap-4 mt-4">
              <div
                class="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center"
              >
                <Icon name="uil:user" class="text-2xl" />
              </div>
              <div>
                <h4 class="font-semibold">John Doe</h4>
                <p class="text-sm text-gray-400">CEO, Tech Company</p>
              </div>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div
            class="bg-white bg-opacity-5 p-8 rounded-2xl flex flex-col gap-4"
          >
            <div class="flex gap-2 text-yellow-400">
              <Icon name="uil:star" />
              <Icon name="uil:star" />
              <Icon name="uil:star" />
              <Icon name="uil:star" />
              <Icon name="uil:star" />
            </div>
            <p class="text-lg italic">
              "Desain UI/UX yang luar biasa dan implementasi yang solid.
              Aplikasi kami sekarang jauh lebih user-friendly dan mendapat
              feedback positif dari pengguna."
            </p>
            <div class="flex items-center gap-4 mt-4">
              <div
                class="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center"
              >
                <Icon name="uil:user" class="text-2xl" />
              </div>
              <div>
                <h4 class="font-semibold">Jane Smith</h4>
                <p class="text-sm text-gray-400">Founder, Startup ABC</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Clients Logo Section -->
        <div class="flex flex-col gap-6">
          <h3 class="text-2xl font-semibold text-center">
            Dipercaya oleh berbagai perusahaan
          </h3>
          <div
            class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
          >
            <div
              class="w-40 h-24 bg-white bg-opacity-5 rounded-xl flex items-center justify-center"
            >
              <span class="text-gray-500 text-sm">Client Logo 1</span>
            </div>
            <div
              class="w-40 h-24 bg-white bg-opacity-5 rounded-xl flex items-center justify-center"
            >
              <span class="text-gray-500 text-sm">Client Logo 2</span>
            </div>
            <div
              class="w-40 h-24 bg-white bg-opacity-5 rounded-xl flex items-center justify-center"
            >
              <span class="text-gray-500 text-sm">Client Logo 3</span>
            </div>
            <div
              class="w-40 h-24 bg-white bg-opacity-5 rounded-xl flex items-center justify-center"
            >
              <span class="text-gray-500 text-sm">Client Logo 4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
