<script setup lang="ts">
useSeoMeta({
  title: "Why Maxima CX - Maxima CX",
  description:
    "Why choose Maxima CX: risk-free, results-first customer experience — multilingual 24/7 support, high-ROI customer reactivation, VIP concierge and real-time performance dashboards.",
});

const { whyMaximaHero, whyBleedingRevenue, whyClientBenefits, whyMaximaCta } =
  useSiteData();
</script>

<template>
  <!-- Hero -->
  <Hero v-bind="whyMaximaHero" />

  <!-- Your Brand is Bleeding Revenue -->
  <BleedingRevenue v-bind="whyBleedingRevenue" />

  <!-- What our clients get -->
  <ClientBenefits v-bind="whyClientBenefits" />

  <!-- CTA -->
  <CtaPanel v-bind="whyMaximaCta" />
</template>
