// app.config.ts
export default defineAppConfig({
  site: {
    name: "Maxima CX",
    description:
      "More trust, more results, less churn — Maxima CX turns every customer interaction into measurable revenue for iGaming brands.",
    // SEO copy used for <title>, meta description, Open Graph and Twitter.
    seoTitle: "Maxima CX – Customer Experience & Support for iGaming Brands",
    seoDescription:
      "Maxima CX delivers multilingual 24/7 customer support, activation, reactivation and VIP experiences for iGaming brands — turning every interaction into measurable growth and retention.",
    // Social share image (1200x630). Add the file at public/og-image.png.
    // ogImage: "/og-image.png",
    email: "contacts@maximacx.com",
    address:
      "Georgia, Tbilisi, Saburtalo District, Merab Aleksidze Street, N6, Floor N2, Office Space N4",
    menu: [
      { title: "Home", path: "/" },
      { title: "What We Do", path: "/what-we-do" },
      { title: "Why Maxima CX", path: "/why-maxima-cx" },
      { title: "Contact Us", path: "/contact-us" },
    ],
    // TODO: point these at real policy pages when they exist.
    legal: [
      { title: "Cookie Policy", path: "#" },
      { title: "Privacy Policy", path: "#" },
      { title: "Terms & Conditions", path: "#" },
    ],
  },
});
