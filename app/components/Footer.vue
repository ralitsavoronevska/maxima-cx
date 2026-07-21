<script setup lang="ts">
const asset = useAsset();

// All footer content (brand name, email, address, nav + legal links) is sourced
// from app.config.ts so it stays in one place across the site.
const { site } = useAppConfig();
</script>

<template>
  <footer class="bg-bg-soft pb-10 pt-12.5 text-muted">
    <div class="shell">
      <!-- Top: brand + email + address | company links -->
      <div
        class="flex justify-between gap-12 max-[700px]:flex-col max-[700px]:gap-10"
      >
        <div>
          <NuxtLink
            to="/"
            class="brand text-[1.5rem] text-white"
            :aria-label="`${site.name} home`"
          >
            <div
              class="logo"
              :style="{ backgroundImage: `url(${asset('/logo.webp')})` }"
            ></div>
            <span>{{ site.name }}</span>
          </NuxtLink>

          <a
            :href="`mailto:${site.email}`"
            class="mt-6 block w-fit font-semibold text-ink transition-colors hover:text-primary-300"
          >
            {{ site.email }}
          </a>

          <p class="mt-4 max-w-80 text-[0.88rem] leading-relaxed text-muted">
            {{ site.address }}
          </p>
        </div>

        <div class="min-w-50">
          <h3 class="text-[1.4rem] font-extrabold tracking-[-0.03em] text-ink">
            Company
          </h3>
          <ul class="mt-5 grid gap-3">
            <li v-for="link in site.menu" :key="link.path">
              <NuxtLink
                :to="link.path"
                class="transition-colors hover:text-primary-300"
              >
                {{ link.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom: copyright | legal -->
      <div
        class="mt-16 flex items-center justify-between gap-4 text-[0.9rem] max-[1050px]:flex-col max-[1050px]:items-center max-[1050px]:text-center"
      >
        <div>
          Copyright © {{ new Date().getFullYear() }} {{ site.name }}. All rights
          reserved.
        </div>

        <div class="flex flex-wrap items-center justify-center gap-3">
          <template v-for="(link, i) in site.legal" :key="link.title">
            <a
              :href="link.path"
              class="transition-colors hover:text-primary-300"
            >
              {{ link.title }}
            </a>
            <span v-if="i < site.legal.length - 1" aria-hidden="true">–</span>
          </template>
        </div>
      </div>
    </div>
  </footer>
</template>
