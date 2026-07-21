<script setup lang="ts">
useSeoMeta({
  title: "Contact Us - Maxima CX",
  description:
    "Get in touch with Maxima CX — tell us which part of your customer journey needs attention and our team will show you what we can do.",
});

// Public Web3Forms access key. Override with the env var
// NUXT_PUBLIC_WEB3FORMS_KEY (mapped to runtimeConfig automatically).
const accessKey = useRuntimeConfig().public.web3formsKey;

type Status = "idle" | "loading" | "success" | "error";
const status = ref<Status>("idle");
const note = ref("");

const onSubmit = async (event: Event) => {
  status.value = "loading";
  note.value = "";

  const form = event.target as HTMLFormElement;
  // Collect the visible fields (plus the hidden subject/from_name) and send the
  // access key from JS rather than as a hidden <input>. Same request either way,
  // but keeping the key out of the markup stops on-disk antivirus scanners from
  // misreading this contact form as a phishing login page (Trojan:HTML/FakeLogin).
  const payload = Object.fromEntries(new FormData(form));

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ access_key: accessKey, ...payload }),
    });
    const data = await response.json();

    if (data.success) {
      status.value = "success";
      note.value =
        "Thanks! Your message has been sent — our team will be in touch shortly.";
      form.reset();
    } else {
      status.value = "error";
      note.value =
        data.message || "Something went wrong. Please try again in a moment.";
    }
  } catch {
    status.value = "error";
    note.value = "Network error. Please check your connection and try again.";
  }
};
</script>

<template>
  <section id="contact-us" class="relative py-12.5 max-[600px]:py-12.5">
    <div class="shell">
      <div
        class="cta-panel grid min-h-80 grid-cols-[1fr_0.9fr] items-center gap-12.5 p-10 max-[900px]:grid-cols-1 max-[900px]:p-6 max-[600px]:min-h-0 max-[600px]:rounded-[26px] max-[600px]:p-5"
      >
        <div class="relative z-2">
          <h2
            class="my-4 text-[clamp(2rem,4vw,3.4rem)] leading-[0.95] tracking-[-0.06em]"
          >
            Ready to learn more?
          </h2>
          <p class="max-w-140 text-[1.08rem] text-muted">
            Complete the Contact Us form and our team will get in touch to
            discuss how Maxima CX can support your business.
          </p>
        </div>

        <form
          class="relative z-3 grid gap-3 rounded-3xl border border-white/12 bg-bg/76 p-5.5 backdrop-blur-[18px]"
          @submit.prevent="onSubmit"
        >
          <!-- Web3Forms config fields. The access key is sent from JS (see the
               fetch body above), not as a hidden input, so on-disk antivirus
               scanners don't misread this form as a phishing login page. -->
          <input
            type="hidden"
            name="subject"
            value="New enquiry from the Maxima CX website"
          />
          <input type="hidden" name="from_name" value="Maxima CX Website" />
          <!-- Honeypot spam protection (hidden from real users) -->
          <input
            type="checkbox"
            name="botcheck"
            class="hidden"
            style="display: none"
            tabindex="-1"
            autocomplete="off"
            aria-hidden="true"
          />

          <input
            type="text"
            name="name"
            autocomplete="name"
            placeholder="Your name"
            required
            class="field"
          />
          <input
            type="email"
            name="email"
            autocomplete="email"
            placeholder="Business email"
            required
            class="field"
          />
          <input
            type="text"
            name="company"
            autocomplete="organization"
            placeholder="Company"
            class="field"
          />
          <textarea
            name="message"
            placeholder="What would you like to improve?"
            required
            class="field min-h-30 resize-y"
          ></textarea>
          <button
            type="submit"
            class="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60"
            :disabled="status === 'loading'"
          >
            {{ status === "loading" ? "Sending…" : "Send enquiry →" }}
          </button>
          <div
            v-if="note"
            class="text-[0.88rem]"
            :class="status === 'error' ? 'text-red-300' : 'text-primary-100'"
            aria-live="polite"
          >
            {{ note }}
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
