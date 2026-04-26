"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="small"
        sizing="mediumLargeSizeMediumTitles"
        background="grid"
        cardStyle="subtle-shadow"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Features",
          id: "#features",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="DevDigital"
      button={{
        text: "Get Started",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      background={{
        variant: "gradient-bars",
      }}
      title="We Build Digital Experiences That Drive Results"
      description="Professional web development agency helping restaurants and companies scale with modern, high-converting websites."
      testimonials={[
        {
          name: "John Doe",
          handle: "@johndoe",
          testimonial: "Transformed our restaurant revenue!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-young-businesswoman_23-2149153829.jpg",
        },
        {
          name: "Jane Smith",
          handle: "@janesmith",
          testimonial: "Incredible service and quality.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-entrepreneur-with-corporate-job-looking-camera-business-office-portrait-young-man-preparing-work-planning-development-industry-with-technology-computer_482257-29387.jpg",
        },
        {
          name: "Bob Brown",
          handle: "@bobbrown",
          testimonial: "Fast, reliable, and professional.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-jolly-adult-engaging-virtual-workshop-course-via-web-teleconference_482257-120792.jpg",
        },
        {
          name: "Alice White",
          handle: "@alicew",
          testimonial: "Best tech partner we've had.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-asian-woman-with-smartphone-relaxing-cafe-sitting-enjoying-coffee-while_1258-199402.jpg",
        },
        {
          name: "Charlie Gray",
          handle: "@cgray",
          testimonial: "Highly recommended for agencies.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-model-sitting-chair_23-2148503630.jpg",
        },
      ]}
      buttons={[
        {
          text: "View Our Services",
          href: "#services",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/empty-ai-tech-agency-workspace-providing-custom-software-development-services_482257-120228.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/luxurious-modern-office-space-with-important-reports-laptop-empty-desk-showcasing-important-data_482257-133861.jpg",
          alt: "Luxurious modern office space",
        },
        {
          src: "http://img.b2bpic.net/free-photo/coffee-notebooks-near-computer-camera_23-2147823721.jpg",
          alt: "Coffee and notebooks",
        },
        {
          src: "http://img.b2bpic.net/free-photo/business-graphs-performance-metrics-monitors-office_482257-126569.jpg",
          alt: "Business graphs and performance",
        },
        {
          src: "http://img.b2bpic.net/free-photo/headphones-with-microphone-call-center-office-desk_482257-125977.jpg",
          alt: "Headphones with microphone",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-young-businesswoman_23-2149153829.jpg",
          alt: "restaurant owner portrait",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Scalable Infrastructure",
        },
        {
          type: "text",
          text: "UI/UX Excellence",
        },
        {
          type: "text",
          text: "Conversion Optimization",
        },
        {
          type: "text",
          text: "Secure Cloud Solutions",
        },
        {
          type: "text",
          text: "Performance Focused",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Crafting the Future of Web Business"
      description="We blend design and technology to build websites that aren't just pretty, but functional engines for business growth."
      bulletPoints={[
        {
          title: "Conversion Focused",
          description: "Designed to drive sales and customer engagement.",
        },
        {
          title: "Lightning Fast",
          description: "Performance optimized for SEO and UX.",
        },
        {
          title: "Custom Solutions",
          description: "Built for your unique business needs.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/team-developers-doing-brainstorming-optimizing-code_482257-112921.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      features={[
        {
          title: "Responsive Design",
          description: "Looks perfect on all screens.",
          imageSrc: "http://img.b2bpic.net/free-photo/web-design-template-copy-space-concept_53876-120756.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/day-office-travel-agency_23-2150769962.jpg",
          buttonText: "Learn More",
        },
        {
          title: "Secure Infrastructure",
          description: "Safe, reliable, and fast.",
          imageSrc: "http://img.b2bpic.net/free-photo/fingerprint-authentication-futuristic-cybersecurity-concept_23-2151998469.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/glowing-warning-triangle-with-digital-distortion-black-background_84443-91300.jpg",
          buttonText: "Learn More",
        },
        {
          title: "SEO Optimized",
          description: "Ranking high on search engines.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-low-poly-plexus-design-shallow-depth-field-modern-communication_1048-12682.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/blurred-night-lights_23-2148139320.jpg",
          buttonText: "Learn More",
        },
      ]}
      title="Key Capabilities"
      description="Powerful features that keep your business ahead of the competition."
    />
  </div>

  <div id="services" data-section="services">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Restaurant Web Starter",
          price: "$1,500",
          variant: "Bestseller",
          imageSrc: "http://img.b2bpic.net/free-photo/online-food-ordering_1098-22010.jpg",
        },
        {
          id: "2",
          name: "Corporate Booking Portal",
          price: "$3,500",
          variant: "Premium",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-man-working-travel-agency_52683-136435.jpg",
        },
        {
          id: "3",
          name: "Boutique Shop Store",
          price: "$2,800",
          variant: "E-Commerce",
          imageSrc: "http://img.b2bpic.net/free-photo/online-shopping-experience_23-2151952979.jpg",
        },
        {
          id: "4",
          name: "Portfolio Showcase",
          price: "$1,200",
          variant: "Minimal",
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-store-with-abstract-concept-architecture_23-2150862098.jpg",
        },
        {
          id: "5",
          name: "Event Dashboard",
          price: "$4,000",
          variant: "Enterprise",
          imageSrc: "http://img.b2bpic.net/free-photo/business-investor-analyzing-stock-market-trend-monitor-trading-capital-profit-exchange-investment-young-broker-investing-funds-using-financial-forex-market-sales-close-up-handheld-shot_482257-40948.jpg",
        },
        {
          id: "6",
          name: "Medical Service Portal",
          price: "$3,900",
          variant: "Professional",
          imageSrc: "http://img.b2bpic.net/free-photo/doctor-suggesting-hospital-program-patient_53876-14807.jpg",
        },
      ]}
      title="Our Solutions"
      description="Tailored packages to get your company up and running."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Restaurant Client",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-standing-airport-terminal_107420-85070.jpg",
        },
        {
          id: "2",
          name: "Corporate Client",
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-professional-businesswoman-with-glasses-presentation_23-2148824824.jpg",
        },
        {
          id: "3",
          name: "Agency Manager",
          imageSrc: "http://img.b2bpic.net/free-photo/focused-woman-examining-documents_482257-121957.jpg",
        },
        {
          id: "4",
          name: "Shop Owner",
          imageSrc: "http://img.b2bpic.net/free-photo/picture-charming-charismatic-young-female-artist-wearing-khaki-shirt-grinning-broadly-feeling-happy-about-her-job-creating-process-sitting-workshop-surrounded-with-painting-accessories_273609-893.jpg",
        },
        {
          id: "5",
          name: "Startup Founder",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-solving-startup-problems-with-laptop-archived-documents-looking-annual-statistics-report-find-issue-young-analyst-reviewing-papers-executive-strategy-plan_482257-65811.jpg",
        },
      ]}
      cardTitle="Client Success"
      cardTag="Reviews"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "How long does it take?",
          content: "Most projects take 2-4 weeks.",
        },
        {
          id: "2",
          title: "Is maintenance included?",
          content: "Yes, we offer ongoing support plans.",
        },
        {
          id: "3",
          title: "Do you handle hosting?",
          content: "We can help manage your hosting setup.",
        },
      ]}
      sideTitle="Questions?"
      sideDescription="Everything you need to know about our web development process."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "TechCorp",
        "InnovateLab",
        "GrowthCo",
        "StartupXYZ",
        "DigitalReach",
        "FastWeb",
        "NextGrowth",
      ]}
      title="Trusted By Professionals"
      description="We are honored to have worked with industry-leading companies and local businesses alike."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      text="Ready to take your business online? Let's build your website today."
      buttons={[
        {
          text: "Contact Us",
          href: "mailto:hello@devdigital.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
          ],
        },
        {
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Privacy",
              href: "#",
            },
          ],
        },
      ]}
      logoText="DevDigital"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
