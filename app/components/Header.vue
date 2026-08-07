<script setup lang="ts">
const asset = useAsset();

const { site } = useAppConfig();
const route = useRoute();

const open = ref(false);

// Navigation comes from app.config.ts. The Contact page is surfaced as the
// primary CTA button below, so keep it out of the plain nav-link row.
const navLinks = site.menu.filter((item) => item.path !== "/contact-us");

const isActive = (to: string) =>
  to === "/" ? route.path === "/" : route.path.startsWith(to);

// Close the mobile menu whenever the route changes.
watch(
  () => route.path,
  () => (open.value = false),
);
</script>

<template>
  <header
    class="sticky top-0 z-100 border-b border-white/[0.07] bg-bg/80 backdrop-blur-[18px]"
  >
    <nav
      class="shell relative flex min-h-20.5 items-center justify-between gap-5.5"
      aria-label="Main navigation"
    >
      <NuxtLink to="/" class="brand" :aria-label="`${site.name} home`">
        <div
          class="logo"
          :style="{ backgroundImage: `url(${asset('/logo.webp')})` }"
        ></div>
        <span>{{ site.name }}</span>
      </NuxtLink>

      <button
        class="hidden h-11 w-11 cursor-pointer place-items-center rounded-[14px] border border-line bg-white/[0.07] text-white max-[900px]:inline-grid"
        :aria-expanded="open"
        aria-controls="navMenu"
        aria-label="Open navigation"
        @click="open = !open"
      >
        {{ open ? "✕" : "☰" }}
      </button>

      <div
        class="nav-menu flex items-center gap-6.25 text-[0.93rem] text-[#c7d0ca] max-[1050px]:gap-4.25 max-[1050px]:text-[0.88rem] max-[900px]:hidden"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="nav-link"
          :class="{ 'nav-link--active': isActive(link.path) }"
        >
          {{ link.title }}
        </NuxtLink>
        <NuxtLink to="/contact-us" class="btn btn-primary max-[900px]:mt-2">
          Book a consultation →
        </NuxtLink>
      </div>

      <transition
        enter-active-class="transition duration-150 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        leave-active-class="transition duration-100 ease-in"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="open"
          id="navMenu"
          class="nav-menu hidden items-center gap-6.25 text-[0.93rem] text-[#c7d0ca] max-[1050px]:gap-4.25 max-[1050px]:text-[0.88rem] max-[900px]:flex"
        >
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="nav-link"
            :class="{ 'nav-link--active': isActive(link.path) }"
            @click="open = false"
          >
            {{ link.title }}
          </NuxtLink>
          <NuxtLink
            to="/contact-us"
            class="btn btn-primary max-[900px]:mt-2"
            @click="open = false"
          >
            Book a consultation →
          </NuxtLink>
        </div>
      </transition>
    </nav>
  </header>
</template>
