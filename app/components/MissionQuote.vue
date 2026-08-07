<script setup lang="ts">
defineProps<{
  quote: string;
}>();

const asset = useAsset();
</script>

<template>
  <section class="relative py-12.5 max-[600px]:py-12.5">
    <div class="shell">
      <figure
        class="quote-panel reveal relative overflow-hidden text-center px-[clamp(28px,6vw,110px)] py-[clamp(36px,5vw,72px)]"
      >
        <img
          :src="asset('/what-we-do/quote-mark.svg')"
          alt=""
          aria-hidden="true"
          class="quote-mark quote-mark--open"
        />
        <img
          :src="asset('/what-we-do/quote-mark.svg')"
          alt=""
          aria-hidden="true"
          class="quote-mark quote-mark--close"
        />
        <blockquote
          class="relative z-2 mx-auto max-w-230 text-[clamp(1.3rem,2.6vw,2.1rem)] font-semibold leading-normal tracking-[-0.02em] text-ink"
        >
          {{ quote }}
        </blockquote>
      </figure>
    </div>
  </section>
</template>
