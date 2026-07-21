<script setup lang="ts">
interface ApartItem {
  symbol: string;
  title: string;
  body: string;
}

defineProps<{
  heading: string;
  items: ApartItem[];
}>();
</script>

<template>
  <section class="relative py-12.5 max-[600px]:py-12.5">
    <div class="shell">
      <div
        class="mb-11 flex items-center justify-center text-center max-[600px]:mb-7.5"
      >
        <h2 class="mb-0 text-[1.75rem] leading-[0.98] tracking-[-0.06em]">
          {{ heading }}
        </h2>
      </div>

      <div
        class="grid grid-cols-4 gap-4.5 max-[1050px]:grid-cols-2 max-[600px]:grid-cols-1"
      >
        <article
          v-for="item in items"
          :key="item.title"
          class="card why-card reveal flex min-h-70 flex-col justify-end"
        >
          <span class="why-symbol">{{ item.symbol }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
