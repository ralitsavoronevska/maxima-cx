// Adds the `visible` class to `.reveal` elements as they scroll into view.
// Re-scans after every page navigation so newly mounted sections animate too.
export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | null = null;

  const scan = () => {
    if (!observer) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );
    }
    document
      .querySelectorAll(".reveal:not(.visible)")
      .forEach((el) => observer?.observe(el));
  };

  nuxtApp.hook("page:finish", () => {
    requestAnimationFrame(scan);
  });
});
