import { useState } from "react";
import "./tailwind.css";
import {
  Hero,
  DonateComponent,
  SupportedNgoBanner,
  HungerSection2,
  HungerSection,
  ShareBanner,
} from "./Mission_template";
import Footer from "./Footer";

const SeniorCare = () => {
  return (
    <>
      <Hero
        mission="Caring for Our Seniors"
        tagline="Promoting Aging with Dignity and Independence"
        footerT="Unlock the Joy of Senior Living "
        action="Promote Aging "
        Himg="elder"
      />
      <HungerSection
        header="Bring comfort and happiness to our elderly"
        subheading="Provide the care they deserve "
        info=" With your generous contributions, we can make a significant impact in the lives of senior citizens who are in need of care. Your donation will help us provide essential services such as medical assistance, home care, mobility aids, and social programs tailored to their unique needs. These funds will enable us to create a safe and nurturing environment where seniors can thrive, enjoy companionship, and receive the care they deserve."
        sectionimg="/elder1.jpg"
      />
      <HungerSection2
        Simg="/elder2.jpeg"
        Hs1="fa-brands fa-fly"
        Hs2="fa-solid fa-wand-magic-sparkles"
        Hs3="fa-solid fa-heart"
        header="Create a community where our seniors thrive"
        subheading="Supporting the needs "
        info=" With your generous contributions, we can make a significant impact in the lives of senior citizens who are in need of care. Your donation will help us provide essential services such as medical assistance, home care, mobility aids, and social programs tailored to their unique needs. These funds will enable us to create a safe and nurturing environment where seniors can thrive, enjoy companionship, and receive the care they deserve."
        s1="Honor the wisdom"
        if1="Support their needs in their golden years"
        s2="Create a nurturing environment"
        if2="Making a meaningful difference in the lives of our elders"
        s3="Create a loving community for our elders"
        if3="Promoting their overall well-being and happiness."
      />
      <DonateComponent action="Promote Aging " img="elder4.jpeg" />
      <SupportedNgoBanner />
      <ShareBanner />
      <Footer />
    </>
  );
};

export default SeniorCare;
