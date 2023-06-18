import {
  Hero,
  DonateComponent,
  SupportedNgoBanner,
  HungerSection2,
  HungerSection,
  ShareBanner,
} from "./Mission_template";
import Footer from "./Footer";
import "./tailwind.css";

const HealingTogether = () => {
  return (
    <>
      <Hero
        mission="Hope and Healing Together"
        tagline="Raising Funds for Health and Well-being"
        footerT=" Help Overcoming Challenges and Embrace Healing"
        action="Restore Hope"
        Himg="heal"
      />
      <HungerSection
        header="Bring healing to those in need"
        subheading="Make a positive impact on the health of others"
        info="Living with a health problem can be an immense challenge, both physically and emotionally. Many individuals find themselves facing the uphill battle of medical expenses, treatments, and support services that can strain their financial resources. In such situations, raising funds becomes a lifeline for those in need"
        sectionimg="/heal-1.jpg"
      />
      <HungerSection2
        Simg="/heal-3.jpeg"
        header=" Provide hope"
        subheading="Provide hope and healing to those facing health challenges."
        info="The journey of battling a health problem is not one that anyone should have to face alone. It requires a network of compassionate and caring individuals who come together to offer their support. Raising funds for people with health problems enables us to build this community of support, offering a ray of hope amidst the challenges they face."
        s1="Every contribution counts in our mission "
        if1="Improve healthcare and save lives"
        Hs1="fa-solid fa-heart-pulse"
        s2="Offering them strength and support"
        if2="Become a vital part of the healing journey"
        Hs2="fa-solid fa-suitcase-medical"
        s3="Invest in the health and happiness "
        if3="Creating a healthier world by giving to our health-related cause"
        Hs3="fa-solid fa-face-smile-beam"
      />
      <DonateComponent action="Restore Hope" img="heal-2.jpg" />
      <SupportedNgoBanner />
      <ShareBanner />
      <Footer />
    </>
  );
};

export default HealingTogether;
