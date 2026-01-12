import { BenefitsSection } from "@/components/BenefitsSection";
import { CtaSection } from "@/components/CtaSection";
import { FaqSection } from "@/components/FaqSection";
import { HeroShowcase } from "@/components/HeroShowcase";
import { ModalFlowProvider } from "@/components/ModalFlow";
import { Navbar } from "@/components/Navbar";
import { NewsletterSection } from "@/components/NewsletterSection";
import { SiteFooter } from "@/components/SiteFooter";
import { StepsSection } from "@/components/StepsSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accounts Center | Meta Verified",
  description:
    "Trang Accounts Center mô phỏng phong cách Meta, xây dựng bằng Next.js 14, TypeScript và Tailwind CSS.",
  alternates: {
    canonical: "/accounts-center",
  },
};

export default function AccountsCenterPage() {
  return (
    <ModalFlowProvider>
      <div className="bg-white">
        <Navbar />
        <HeroShowcase />
        <section className="mx-auto max-w-6xl px-4 py-10 text-center text-sm text-slate-500 sm:px-6 lg:px-12">
          A creator toolkit to take your brand further. Customize key Meta Verified benefits across
          Facebook and Instagram. Grow safer, drive demand, and bring in discovery opportunities.
        </section>
        <BenefitsSection />
        <StepsSection />
        <TestimonialSection />
        <CtaSection />
        <FaqSection />
        <NewsletterSection />
        <SiteFooter />
      </div>
    </ModalFlowProvider>
  );
}
