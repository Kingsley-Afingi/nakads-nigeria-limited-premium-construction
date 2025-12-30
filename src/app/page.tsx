
import CTA from "@/component/CTA";
import Hero from "@/component/Hero";
// import Projects from "@/component/Projects";
// import Services from "@/component/CoreServices";
import Stats from "@/component/Stats";
import Testimonials from "@/component/Testimonials";
import WelcomeSection from "@/component/WelcomeSection";
import CoreServices from "@/component/CoreServices";
import ProjectsShowcase from "@/component/ProjectsShowcase";
import WhyChooseUs from "@/component/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats/>
      <WelcomeSection />
      <CoreServices/>
      <WhyChooseUs/>
      <ProjectsShowcase/>
      {/* <Projects /> */}
      <Testimonials />
      <CTA />
    </>
  );
}
