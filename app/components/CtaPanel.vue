<script setup lang="ts">
interface Cta {
  label: string;
  to: string;
  variant: "primary" | "secondary";
}

defineProps<{
  heading: string;
  body: string;
  ctas: Cta[];
}>();
</script>

<template>
  <section class="relative py-12.5 max-[600px]:py-12.5">
    <div class="shell">
      <div
        class="cta-panel grid min-h-80 grid-cols-[1fr_0.9fr] items-center gap-12.5 p-10 max-[900px]:grid-cols-1 max-[900px]:p-6 max-[600px]:min-h-0 max-[600px]:rounded-[26px] max-[600px]:p-5"
      >
        <div class="relative z-2">
          <h2
            class="my-4 text-[clamp(2rem,4vw,3.4rem)] leading-[0.95] tracking-[-0.06em]"
          >
            {{ heading }}
          </h2>
          <p class="max-w-140 text-[1.08rem] text-muted">
            {{ body }}
          </p>
        </div>
        <div
          class="relative z-2 flex flex-wrap justify-self-end gap-3.25 max-[900px]:justify-self-start"
        >
          <NuxtLink
            v-for="cta in ctas"
            :key="cta.to"
            :to="cta.to"
            class="btn"
            :class="cta.variant === 'primary' ? 'btn-primary' : 'btn-secondary'"
          >
            {{ cta.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
