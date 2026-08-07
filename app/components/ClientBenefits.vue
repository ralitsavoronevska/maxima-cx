<script setup lang="ts">
interface ClientBenefit {
  title: string;
  body: string;
  img: string;
}

defineProps<{
  heading: string;
  items: ClientBenefit[];
}>();

const asset = useAsset();
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
        class="grid grid-cols-3 gap-4.5 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1"
      >
        <article
          v-for="item in items"
          :key="item.title"
          class="card reveal flex min-h-75 flex-col justify-end"
        >
          <img
            :src="asset(item.img)"
            alt=""
            aria-hidden="true"
            loading="lazy"
            class="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />
          <div
            class="pointer-events-none absolute inset-0 bg-linear-to-t from-[#05080d] via-[#05080d]/75 to-[#05080d]/15"
          ></div>
          <div class="relative z-2">
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
