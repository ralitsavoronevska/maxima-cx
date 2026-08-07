<script setup lang="ts">
// Props typed inline (not via an imported interface) so the SFC compiler
// doesn't need the `typescript` package to resolve cross-file types.
interface ChallengeFeature {
  icon: string;
  labelLines: string[];
}

interface ChallengeRow {
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
  featuresLabel: string;
  features: ChallengeFeature[];
}

defineProps<{
  rows: ChallengeRow[];
}>();

const asset = useAsset();
</script>

<template>
  <section class="surface-best relative py-12.5 max-[600px]:py-12.5">
    <div class="shell">
      <div class="grid gap-9.5">
        <!-- Layout alternates by index: even rows show text then media, odd
             rows show media (in the --alt frame) then text. Every row after the
             first gets a divider; the first heading is an <h2>, the rest <h3>. -->
        <article
          v-for="(row, i) in rows"
          :key="row.heading"
          class="grid items-center gap-15.5 min-h-102.5 reveal max-[900px]:grid-cols-1 max-[900px]:gap-8.5 max-[900px]:min-h-0"
          :class="[
            i % 2 === 1 ? 'grid-cols-[1.08fr_1fr]' : 'grid-cols-[1fr_1.08fr]',
            i > 0 ? 'border-t border-white/9 pt-11' : '',
          ]"
        >
          <div
            class="max-[900px]:order-2"
            :class="i % 2 === 1 ? 'min-[901px]:order-2' : 'min-[901px]:order-1'"
          >
            <component
              :is="i === 0 ? 'h2' : 'h3'"
              class="my-4.5 text-[clamp(1.9rem,4vw,3rem)] leading-[1.02] tracking-[-0.055em]"
            >
              {{ row.heading }}
            </component>
            <p class="max-w-152.5 text-[1.05rem] leading-[1.72] text-muted">
              {{ row.body }}
            </p>

            <div
              class="mt-7 grid grid-cols-4 gap-4.5 max-[1050px]:grid-cols-2"
              :aria-label="row.featuresLabel"
            >
              <div
                v-for="(feature, fi) in row.features"
                :key="fi"
                class="min-w-0 text-center"
              >
                <div class="feature-icon">
                  <svg viewBox="0 0 32 32" v-html="feature.icon"></svg>
                </div>
                <span
                  class="block text-[0.88rem] leading-[1.35] text-[#f0f4f1] font-[690]"
                >
                  <template v-for="(line, li) in feature.labelLines" :key="li"
                    >{{ line }}<br v-if="li < feature.labelLines.length - 1"
                  /></template>
                </span>
              </div>
            </div>
          </div>

          <div
            class="media-frame max-[900px]:order-1"
            :class="
              i % 2 === 1
                ? 'media-frame--alt min-[901px]:order-1'
                : 'min-[901px]:order-2'
            "
          >
            <img :src="asset(row.image)" :alt="row.imageAlt" loading="lazy" />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
