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

const EmbraceAbilities = () => {
  return (
    <>
      <Hero
        mission="Embrace Abilities, Inspire Change"
        tagline="Let's Make a Difference in the Lives of Disabled Individuals"
        footerT="Break the barriers "
        action="support special-needs"
        Himg="disabled"
      />
      <HungerSection
        header="Uplift disabled individuals"
        subheading="transforming their lives "
        info="Taking care of disabled people is a vital aspect of building an inclusive and compassionate society. It involves providing physical, emotional, and social support to individuals with disabilities, ensuring their well-being and enabling them to lead fulfilling lives."
        sectionimg="/ability-2.jpg"
      />
      <HungerSection2
        Simg="/ability-3.jpg"
        Hs1="fa-solid fa-fire-flame-curved"
        Hs2="fa-solid fa-key"
        Hs3="fa-solid fa-star"
        header="provide essential care"
        subheading="Ensuring they reach their full potential"
        info="Physical care is crucial for disabled individuals, as it often involves assisting with daily activities such as personal hygiene, mobility, and medication management. Caregivers and healthcare professionals play a significant role in addressing their unique needs, ensuring their comfort, and promoting their overall health"
        s1="Grant them the resources"
        if1="Ensure they shine brightly against all odds"
        s2="Make a difference in  disabled life"
        if2="Provide them love, care, and support"
        s3="Pave the way for brighter tomorrow"
        if3=" Enable disabled individuals to lead fulfilling lives"
      />
      <DonateComponent action="Support Exceptional" img="/ability-4.jpeg" />
      <SupportedNgoBanner />
      <ShareBanner />
      <Footer />
    </>
  );
};

export default EmbraceAbilities;
