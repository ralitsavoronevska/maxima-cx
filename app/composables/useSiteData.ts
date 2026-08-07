export interface BleedingRevenueItem {
  /** Icon filename in /public (icon-card variant). */
  icon?: string;
  /** Heading for the icon-card variant. */
  label?: string;
  /** Heading for the numbered-card variant. */
  title?: string;
  /** Optional supporting copy (numbered-card variant). */
  body?: string;
}

export interface BleedingRevenueSection {
  heading: string;
  intro?: string;
  items: BleedingRevenueItem[];
}

export interface HeroContent {
  /** Heading lines rendered in the default ink color. */
  leadLines: string[];
  /** Final heading line rendered with the brand gradient. */
  accent: string;
  intro: string;
  image: string;
  imageAlt: string;
}

export interface HomeHeroContent {
  /** Heading lines rendered in the default ink color. */
  leadLines: string[];
  /** Final heading line rendered with the brand gradient. */
  accent: string;
  intro: string;
  ctas: { label: string; to: string; variant: "primary" | "secondary" }[];
  stats: { value: string; label: string }[];
  cards: { label: string; value: string; note?: string; trend?: boolean }[];
}

export interface ChallengeFeature {
  /** Inner SVG markup for the 0 0 32 32 feature icon (rendered with v-html). */
  icon: string;
  /** Label split into lines (a <br> is rendered between them). */
  labelLines: string[];
}

export interface ChallengeRow {
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
  /** aria-label for the row's capability grid. */
  featuresLabel: string;
  features: ChallengeFeature[];
}

export interface ApartItem {
  symbol: string;
  title: string;
  body: string;
}

export interface ApartSection {
  heading: string;
  items: ApartItem[];
}

export interface LeadershipContent {
  heading: string;
  body: string;
  quote: string;
  cite: string;
  image: string;
  imageAlt: string;
}

export interface Cta {
  label: string;
  to: string;
  variant: "primary" | "secondary";
}

export interface CtaContent {
  heading: string;
  body: string;
  ctas: Cta[];
}

export interface ClientBenefit {
  title: string;
  body: string;
  img: string;
}

export interface ClientBenefitsSection {
  heading: string;
  items: ClientBenefit[];
}

/**
 * Shared content used across pages. Keeps the data out of the templates so the
 * same <BleedingRevenue> component can be reused with different content.
 */
export const useSiteData = () => {
  // Home: problem statements shown as icon cards.
  const homeBleedingRevenue: BleedingRevenueSection = {
    heading: "Your Brand is Bleeding Revenue",
    items: [
      { icon: "expensive-acquisition.svg", label: "Expensive acquisition" },
      { icon: "poor-roi.svg", label: "Poor ROI" },
      { icon: "no-player-retention.svg", label: "No player retention" },
      {
        icon: "lost-revenue-due-to-unsatisfied-players.svg",
        label: "Lost revenue due to unsatisfied players",
      },
      { icon: "lack-of-transparency.svg", label: "Lack of transparency" },
    ],
  };

  // Why Maxima CX: differentiators shown as numbered cards.
  // TODO: replace body copy + 5th title with the exact text from the source doc.
  const whyBleedingRevenue: BleedingRevenueSection = {
    heading: "Your Brand is Bleeding Revenue",
    intro:
      "Performance isn't just promised — it's delivered. Here's how we turn every player interaction into measurable growth.",
    items: [
      {
        title: "Growth Without Guesswork",
        body: "No blanket retainers, no bulk work. Our model is built around measurable outcomes — focused, accountable and perfectly aligned with your business goals.",
      },
      {
        title: "Risk-Free, Results-First",
        body: "You only pay for performance. We re-engage your audience, boost deposits and drive ROI through human-led outreach, with no upfront cost to you.",
      },
      {
        title: "Built for iGaming, Tuned for You",
        body: "From day one, your brand, tone and player profiles shape the way we work. Every Maxima CX agent is trained for casino, sports or lottery environments, and every campaign is built on data.",
      },
      {
        title: "Fast Start, Lasting Impact",
        body: "You don't need to wait months to launch. Our team adapts to your ecosystem with speed and precision — whether it's a new brand, a turnkey platform or a growing rollout of white labels.",
      },
      {
        title: "Total Transparency",
        body: "Our work is never a black box. You'll see what's working, what's improving and how every campaign contributes to your bottom line, in real time.",
      },
    ],
  };

  // Page heroes: headline (lead lines + gradient accent) + intro + photo.
  const whatWeDoHero: HeroContent = {
    leadLines: ["Maxima CX:", "Experience Could Be"],
    accent: "Holding You Back",
    intro:
      "Introduce common challenges businesses face when support their is viewed as an operational function rather than a strategic advantage.",
    image: "what-we-do/what-we-do-hero.jpg",
    imageAlt: "Maxima CX team collaborating on customer experience strategy",
  };

  const whyMaximaHero: HeroContent = {
    leadLines: ["Why Choose"],
    accent: "Maxima CX",
    intro:
      "Customer expectations continue to evolve. We help businesses deliver consistent, reliable, and high-quality customer experiences that strengthen relationships and support long-term growth.",
    image: "why-maxima-cx/why-maxima-cx-hero.svg",
    imageAlt: "Illustration of Maxima CX performance growth and analytics",
  };

  // Home hero: layered visual + headline, CTAs, stat highlights and glass cards.
  const homeHero: HomeHeroContent = {
    leadLines: ["More Trust.", "More Result.", "Less Churn."],
    accent: "The Value That Drives Revenue.",
    intro:
      "Every interaction shapes how people see your brand. We help make every one count.",
    ctas: [
      { label: "Book a consultation →", to: "/contact-us", variant: "primary" },
      { label: "View our services", to: "/what-we-do", variant: "secondary" },
    ],
    stats: [
      { value: "24/7", label: "Service coverage" },
      { value: "Human-led", label: "Personal conversations" },
      { value: "Transparent", label: "Performance reporting" },
    ],
    cards: [
      { label: "Customer lifecycle", value: "Support → Loyalty", trend: true },
      {
        label: "Commercial focus",
        value: "Growth you can track",
        note: "Clear workflows. Visible outcomes.",
      },
    ],
  };

  // What We Do — mission statement shown in the quote panel.
  const whatWeDoQuote =
    "Every successful business is built on strong communication. At Maxima CX, we help companies to improve retention and create better experiences through dedicated teams and tailored solutions. Whether you are expanding into new markets, scaling operations or improving customer satisfaction, we provide the expertise and resources to support your growth.";

  // Inline SVG icons — inner markup only, drawn on a 0 0 32 32 canvas and
  // reused across the What We Do capability rows.
  const icon = {
    headset: `<path d="M6 17v-2a10 10 0 0 1 20 0v2" /><path d="M6 17h3v8H7a3 3 0 0 1-3-3v-2a3 3 0 0 1 2-3Z" /><path d="M26 17h-3v8h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-2-3Z" /><path d="M23 25c-1 3-4 3-7 3" />`,
    target: `<circle cx="16" cy="16" r="10" /><circle cx="16" cy="16" r="4" /><path d="M16 2v5M16 25v5M2 16h5M25 16h5" />`,
    reengage: `<path d="M25 10V4l-4 4" /><path d="M7 22v6l4-4" /><path d="M24 9a10 10 0 0 0-17 4" /><path d="M8 23a10 10 0 0 0 17-4" />`,
    gem: `<path d="m16 4 10 7-10 17L6 11Z" /><path d="m6 11 10 4 10-4M12 5l4 10 4-10" />`,
    bolt: `<path d="M18 3 8 18h7l-1 11 10-16h-7Z" />`,
    bars: `<path d="M5 27V17h5v10M13 27V11h5v16M21 27V5h6v22" /><path d="M3 27h26" />`,
    globe: `<circle cx="16" cy="16" r="12" /><path d="M4 16h24M16 4c4 4 5 8 5 12s-1 8-5 12c-4-4-5-8-5-12s1-8 5-12Z" />`,
    shieldCheck: `<path d="M16 3 27 7v8c0 7-4 11-11 14C9 26 5 22 5 15V7Z" /><path d="m11 16 3 3 7-7" />`,
    smiley: `<circle cx="16" cy="16" r="12" /><path d="M12 13v1.4M20 13v1.4M10.5 19a6.5 6.5 0 0 0 11 0" />`,
    heart: `<path d="M16 26S5 19 5 12a5.5 5.5 0 0 1 11-1 5.5 5.5 0 0 1 11 1c0 7-11 14-11 14Z" />`,
    searchCheck: `<circle cx="14" cy="14" r="8.5" /><path d="m20.5 20.5 6.5 6.5" /><path d="m10.4 14 2.7 2.7 4.8-5.6" />`,
    chat: `<path d="M6 7h20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H14l-6 5v-5H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" /><path d="M11 12h10M11 16h6" />`,
    pin: `<path d="M16 28s9-8 9-15a9 9 0 1 0-18 0c0 7 9 15 9 15Z" /><circle cx="16" cy="13" r="3.2" />`,
    clock: `<circle cx="16" cy="16" r="12" /><path d="M16 9v7l5 3" />`,
    people: `<circle cx="12" cy="13" r="4" /><path d="M5 25a7 7 0 0 1 14 0" /><path d="M21 10a4 4 0 0 1 0 8" /><path d="M22 25a8 8 0 0 0-3-6" />`,
  };

  // What We Do — alternating challenge/capability rows (layout alternates by
  // index; the first heading renders as <h2>, the rest as <h3>).
  const whatWeDoChallenges: ChallengeRow[] = [
    {
      heading: "Delayed Responses",
      body: "Timely support matters more than ever.",
      image: "/what-we-do/delayed-responses.svg",
      imageAlt: "Illustration of fast, timely customer responses",
      featuresLabel: "Core Maxima CX capabilities",
      features: [
        { icon: icon.headset, labelLines: ["Expert", "Support"] },
        { icon: icon.target, labelLines: ["Customer", "Activation"] },
        { icon: icon.reengage, labelLines: ["Re-engagement", "Campaigns"] },
        { icon: icon.gem, labelLines: ["Premium Customer", "Care"] },
      ],
    },
    {
      heading: "Disconnected Experiences",
      body: "Inconsistent interactions can weaken customer relationships.",
      image: "/what-we-do/disconnected-experiences.svg",
      imageAlt: "Illustration of connected, consistent omnichannel experiences",
      featuresLabel: "Maxima CX delivery advantages",
      features: [
        { icon: icon.bolt, labelLines: ["Fast", "Onboarding"] },
        { icon: icon.bars, labelLines: ["Real-time", "Reporting"] },
        { icon: icon.globe, labelLines: ["Native-speaking", "Teams"] },
        { icon: icon.shieldCheck, labelLines: ["Secure &", "Compliant"] },
      ],
    },
    {
      heading: "Declining Satisfaction",
      body: "Small frustrations can have a lasting impact.",
      image: "/what-we-do/declining-satisfaction.svg",
      imageAlt: "Illustration of rising customer satisfaction",
      featuresLabel: "Maxima CX satisfaction capabilities",
      features: [
        { icon: icon.smiley, labelLines: ["Happy", "Customers"] },
        { icon: icon.bolt, labelLines: ["Quick", "Resolutions"] },
        { icon: icon.heart, labelLines: ["Personal", "Care"] },
        { icon: icon.searchCheck, labelLines: ["Quality", "Monitoring"] },
      ],
    },
    {
      heading: "Limited Reach",
      body: "Growing expectations require broader support capabilities.",
      image: "/what-we-do/limited-reach.svg",
      imageAlt: "Illustration of broader global reach and coverage",
      featuresLabel: "Maxima CX reach and coverage",
      features: [
        { icon: icon.globe, labelLines: ["Global", "Coverage"] },
        { icon: icon.chat, labelLines: ["Multichannel", "Support"] },
        { icon: icon.pin, labelLines: ["New", "Markets"] },
        { icon: icon.clock, labelLines: ["24/7", "Availability"] },
      ],
    },
    {
      heading: "Scaling Challenges",
      body: "Maintaining quality while growing isn't always easy.",
      image: "/what-we-do/scaling-challenges.svg",
      imageAlt:
        "Illustration of scaling operations while keeping quality consistent",
      featuresLabel: "Maxima CX scaling capabilities",
      features: [
        { icon: icon.people, labelLines: ["Scalable", "Teams"] },
        { icon: icon.bolt, labelLines: ["Fast", "Onboarding"] },
        { icon: icon.shieldCheck, labelLines: ["Consistent", "Quality"] },
        { icon: icon.bars, labelLines: ["Performance", "Insights"] },
      ],
    },
  ];

  // What We Do — "What Sets Us Apart" differentiator cards.
  const whatSetsUsApart: ApartSection = {
    heading: "What Sets Us Apart",
    items: [
      {
        symbol: "↗",
        title: "We Only Win When You Do",
        body: "Performance-led delivery focused on measurable outcomes, not just activity.",
      },
      {
        symbol: "◫",
        title: "Tailored, Not Templated",
        body: "Every workflow is built around your brand, customers and operating model.",
      },
      {
        symbol: "✓",
        title: "Compliance-First",
        body: "Data protection and responsible communication are built into how we work.",
      },
      {
        symbol: "⚡",
        title: "Human Meets Technology",
        body: "Skilled, native-speaking people supported by smart, efficient tooling.",
      },
    ],
  };

  // What We Do — leadership intro.
  // TODO: replace quote, name and headshot with real leadership details.
  const whatWeDoLeadership: LeadershipContent = {
    heading: "Meet the People Behind the Performance",
    body: "Behind every campaign is a team of experienced customer experience specialists, native-speaking agents and account managers who treat your customers as their own.",
    quote:
      "We build lasting partnerships by delivering measurable value through dedicated teams and a genuinely human approach to customer experience.",
    cite: "Maxima CX Leadership",
    image: "/what-we-do/people-behind-the-performance.jpg",
    imageAlt: "Maxima CX account management lead",
  };

  // Reusable CTA panels (shared <CtaPanel> component, different content).
  const whatWeDoCta: CtaContent = {
    heading: "Great experiences don't happen by chance. They happen by design.",
    body: "Tell us which part of your customer journey needs attention and we will show you what Maxima CX can do.",
    ctas: [
      { label: "Contact Us →", to: "/contact-us", variant: "primary" },
      {
        label: "Explore Our Services",
        to: "/why-maxima-cx",
        variant: "secondary",
      },
    ],
  };

  const whyMaximaCta: CtaContent = {
    heading: "Ready to learn more?",
    body: "Complete the Contact Us form and our team will get in touch to discuss how Maxima CX can support your business.",
    ctas: [
      { label: "Contact Us →", to: "/contact-us", variant: "primary" },
      {
        label: "Explore Our Services",
        to: "/what-we-do",
        variant: "secondary",
      },
    ],
  };

  // Why Maxima CX — "What Our Clients Get" service cards.
  const whyClientBenefits: ClientBenefitsSection = {
    heading: "What Our Clients Get",
    items: [
      {
        title: "Multilingual 24/7 Customer Support",
        body: "Round-the-clock care in your customers' own languages.",
        img: "/why-maxima-cx/multilingual-support.svg",
      },
      {
        title: "Revenue-Generating R&D and Activation Campaigns",
        body: "Structured outreach that turns sign-ups into active customers.",
        img: "/why-maxima-cx/activation-campaigns.svg",
      },
      {
        title: "High-ROI Reactivations",
        body: "Personal outreach that wins back dormant, high-value players.",
        img: "/why-maxima-cx/reactivations.svg",
      },
      {
        title: "Elite VIP Concierge Service",
        body: "High-touch account care for your most valuable customers.",
        img: "/why-maxima-cx/vip-concierge.svg",
      },
      {
        title: "Real-time Performance Dashboards",
        body: "Clear visibility into outcomes, campaigns and results.",
        img: "/why-maxima-cx/performance-dashboards.svg",
      },
      {
        title: "Fully Certified Operations",
        body: "Compliance-first delivery aligned with data protection standards.",
        img: "/why-maxima-cx/certified-operations.svg",
      },
    ],
  };

  return {
    homeBleedingRevenue,
    whyBleedingRevenue,
    whatWeDoHero,
    whyMaximaHero,
    homeHero,
    whatWeDoQuote,
    whatWeDoChallenges,
    whatSetsUsApart,
    whatWeDoLeadership,
    whatWeDoCta,
    whyMaximaCta,
    whyClientBenefits,
  };
};
