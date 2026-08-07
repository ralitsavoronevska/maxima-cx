<script setup lang="ts">
// Props are typed inline (not via an imported interface) so the SFC compiler
// doesn't need the `typescript` package to resolve cross-file types.
interface BleedingRevenueItem {
  icon?: string;
  label?: string;
  title?: string;
  body?: string;
}

defineProps<{
  heading: string;
  intro?: string;
  items: BleedingRevenueItem[];
}>();

const asset = useAsset();
</script>

<template>
  <section class="relative py-12.5 max-[600px]:py-12.5">
    <!-- Shared gradient for the numbered badges -->
    <svg width="0" height="0" class="absolute" aria-hidden="true">
      <defs>
        <linearGradient id="badge-grad" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="#8ec5ff" />
          <stop offset="0.5" stop-color="#68b2ff" />
          <stop offset="1" stop-color="#007dfe" />
        </linearGradient>
      </defs>
    </svg>

    <div class="shell">
      <div
        class="mb-11 flex flex-col items-center gap-2 text-center max-[600px]:mb-7.5"
      >
        <h2 class="mb-0 text-[1.75rem] leading-[0.98] tracking-[-0.06em]">
          {{ heading }}
        </h2>
        <p v-if="intro" class="m-0 max-w-160 text-[1.06rem] text-muted">
          {{ intro }}
        </p>
      </div>

      <div class="grid grid-cols-6 gap-4.5 max-[600px]:grid-cols-2">
        <article
          v-for="(item, i) in items"
          :key="item.label || item.title"
          class="reveal"
          :class="[
            item.icon
              ? 'card info-card'
              : 'card flex flex-col items-start gap-4',
            i < 3 ? 'col-span-2' : 'col-span-3',
            // Numbered cards (Why Maxima CX) carry more copy, so give each its own
            // row on mobile; icon cards (home) stay two-up, last one full width.
            item.icon && i !== 4
              ? 'max-[600px]:col-span-1'
              : 'max-[600px]:col-span-2',
          ]"
        >
          <div class="card-glow"></div>

          <!-- Icon-card variant -->
          <img
            v-if="item.icon"
            :src="asset(`/landing-page/${item.icon}`)"
            loading="lazy"
            :alt="item.label"
            class="info-icon"
          />
          <!-- Numbered-card variant -->
          <svg
            v-else
            viewBox="0 0 44 44"
            class="h-11 w-11 shrink-0"
            aria-hidden="true"
          >
            <circle cx="22" cy="22" r="21" fill="url(#badge-grad)" />
            <text
              x="22"
              y="30"
              text-anchor="middle"
              font-size="20"
              font-weight="800"
              fill="#05080d"
            >
              {{ i + 1 }}
            </text>
          </svg>

          <h3>{{ item.title || item.label }}</h3>
          <p v-if="item.body">{{ item.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
