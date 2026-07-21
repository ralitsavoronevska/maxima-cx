<script setup lang="ts">
useSeoMeta({
  title: "Maxima CX – Customer Experience & Support for iGaming Brands",
  description:
    "Maxima CX delivers multilingual 24/7 customer support, activation, reactivation and VIP experiences for iGaming brands — turning every interaction into measurable growth.",
});

const { homeBleedingRevenue, homeHero } = useSiteData();
</script>

<template>
  <!-- Hero -->
  <Hero v-bind="homeHero" />

  <!-- Your Brand is Bleeding Revenue -->
  <BleedingRevenue v-bind="homeBleedingRevenue" />
</template>
