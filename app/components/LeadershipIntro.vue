<script setup lang="ts">
defineProps<{
  heading: string;
  body: string;
  quote: string;
  cite: string;
  image: string;
  imageAlt: string;
}>();

const asset = useAsset();
</script>

<template>
  <section class="surface-best relative py-12.5 max-[600px]:py-12.5">
    <div class="shell">
      <article
        class="grid grid-cols-[1fr_1.08fr] items-center gap-15.5 reveal max-[900px]:grid-cols-1 max-[900px]:gap-8.5"
      >
        <div class="max-[900px]:order-2">
          <h2
            class="my-4.5 text-[clamp(1.9rem,4vw,3rem)] leading-[1.02] tracking-[-0.055em]"
          >
            {{ heading }}
          </h2>
          <p class="max-w-152.5 text-[1.05rem] leading-[1.72] text-muted">
            {{ body }}
          </p>
          <blockquote class="team-quote">
            "{{ quote }}"
            <cite>{{ cite }}</cite>
          </blockquote>
        </div>

        <div class="media-frame max-[900px]:order-1">
          <img :src="asset(image)" :alt="imageAlt" loading="lazy" />
        </div>
      </article>
    </div>
  </section>
</template>
