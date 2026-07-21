<script setup lang="ts">
useSeoMeta({
  title: "What We Do - Maxima CX",
  description:
    "From delayed responses to scaling challenges, see how Maxima CX's multilingual, performance-led teams turn customer support into a growth engine for iGaming brands.",
});

const {
  whatWeDoHero,
  whatWeDoQuote,
  whatWeDoChallenges,
  whatSetsUsApart,
  whatWeDoLeadership,
  whatWeDoCta,
} = useSiteData();
</script>

<template>
  <!-- Hero: headline + intro copy with photo -->
  <Hero v-bind="whatWeDoHero" />

  <!-- Mission quote -->
  <MissionQuote :quote="whatWeDoQuote" />

  <!-- Challenges we solve + the capabilities behind each -->
  <ChallengeRows :rows="whatWeDoChallenges" />

  <!-- What sets us apart -->
  <WhatSetsUsApart v-bind="whatSetsUsApart" />

  <!-- Meet the people -->
  <LeadershipIntro v-bind="whatWeDoLeadership" />

  <!-- Final CTA -->
  <CtaPanel v-bind="whatWeDoCta" />
</template>
