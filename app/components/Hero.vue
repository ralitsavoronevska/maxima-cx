<script setup lang="ts">
interface HeroCta {
  label: string;
  to: string;
  variant: "primary" | "secondary";
}

interface HeroStat {
  value: string;
  label: string;
}

interface HeroCard {
  label: string;
  value: string;
  note?: string;
  trend?: boolean;
}

const props = defineProps<{
  leadLines: string[];
  accent: string;
  intro: string;
  image?: string;
  imageAlt?: string;
  ctas?: HeroCta[];
  stats?: HeroStat[];
  cards?: HeroCard[];
}>();

const asset = useAsset();
const hasRichContent = Boolean(
  props.ctas?.length || props.stats?.length || props.cards?.length,
);
</script>

<template>
  <section
    :class="
      hasRichContent
        ? 'relative grid items-center py-12.5 min-h-190 max-[900px]:min-h-0 max-[600px]:pb-13'
        : 'surface-best relative py-12.5 max-[600px]:py-12.5'
    "
  >
    <div
      :class="
        hasRichContent
          ? 'shell grid grid-cols-[1.08fr_0.92fr] items-center gap-15.5 max-[900px]:grid-cols-1 max-[900px]:gap-7'
          : 'shell grid grid-cols-[1fr_1.08fr] items-center gap-15.5 reveal max-[900px]:grid-cols-1 max-[900px]:gap-8.5'
      "
    >
      <div :class="hasRichContent ? '' : 'text-left max-[900px]:order-2'">
        <h1
          :class="
            hasRichContent
              ? 'mb-6 max-w-197.5 text-[clamp(2.5rem,7vw,5rem)] font-extrabold leading-[0.88] tracking-[-0.075em] animate-fade-up'
              : 'my-4.5 max-w-160 text-[clamp(2.3rem,6vw,3.6rem)] font-extrabold leading-[0.88] tracking-[-0.075em] animate-fade-up'
          "
        >
          <template v-for="(line, i) in leadLines" :key="i"
            >{{ line }}<br
          /></template>
          <span class="gradient-text">{{ accent }}</span>
        </h1>

        <p
          :class="
            hasRichContent
              ? 'max-w-162.5 text-[clamp(1.05rem,2vw,1.25rem)] text-muted animate-fade-up'
              : 'max-w-152.5 text-[1.05rem] leading-[1.72] text-muted'
          "
          :style="hasRichContent ? 'animation-delay: 0.15s' : undefined"
        >
          {{ intro }}
        </p>

        <template v-if="hasRichContent">
          <div
            class="mt-8.5 flex flex-wrap gap-3.25 animate-fade-up"
            style="animation-delay: 0.3s"
          >
            <NuxtLink
              v-for="cta in ctas"
              :key="cta.to"
              :to="cta.to"
              class="btn"
              :class="
                cta.variant === 'primary' ? 'btn-primary' : 'btn-secondary'
              "
            >
              {{ cta.label }}
            </NuxtLink>
          </div>

          <div
            class="mt-12 flex flex-wrap justify-center gap-7.5 text-muted animate-fade-up max-[600px]:gap-4.5 lg:justify-between"
            style="animation-delay: 0.45s"
          >
            <div v-for="stat in stats" :key="stat.label">
              <strong
                class="block text-[1.34rem] tracking-[-0.04em] text-white"
                >{{ stat.value }}</strong
              >{{ stat.label }}
            </div>
          </div>
        </template>
      </div>

      <div
        v-if="hasRichContent"
        class="relative grid min-h-127.5 place-items-center max-[900px]:min-h-107.5 max-[600px]:min-h-91.25"
      >
        <div class="orb orb-one"></div>
        <div class="orb orb-two"></div>

        <div
          v-for="(card, i) in cards"
          :key="card.label"
          class="glass-card"
          :class="i === 0 ? 'glass-card--top' : 'glass-card--bottom'"
        >
          <div class="glass-label">{{ card.label }}</div>
          <div class="glass-value">{{ card.value }}</div>
          <div v-if="card.trend" class="trend"></div>
          <p v-if="card.note" class="mt-2 text-[0.88rem] text-muted">
            {{ card.note }}
          </p>
        </div>
      </div>

      <div v-else-if="image" class="media-frame max-[900px]:order-1">
        <img :src="asset(image)" :alt="imageAlt" loading="lazy" />
      </div>
    </div>
  </section>
</template>
