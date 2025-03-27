export const metadata = {
  title: "Cleyton Silva - Software Engineer",
  description: "I am a software engineer with a passion for building web applications. And I am always looking for new technologies to learn and apply in my projects.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      {/*<Testimonials />
      <Cta />*/}
    </>
  );
}
