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

const ChildEmpowerment = () => {
  return (
    <>
      <Hero
        mission="Empower Young Minds"
        tagline="Empowering Children through Quality Education"
        footerT="children waiting to be sponsored"
        action="Educate a child"
        Himg="educate-child"
      />
      <HungerSection
        header="Empower a child today, and you empower the future"
        subheading="Unlock their full potential"
        info="Child empowerment is a fundamental aspect of building a better future for our society. It entails providing children with the knowledge, skills, resources, and support they need to become confident, resilient, and self-reliant individuals. By empowering children, we are nurturing their innate potential and helping them develop into active participants in shaping their own lives and communities."
        sectionimg="/childEdu-1.jpeg"
      />
      <HungerSection2
        Simg="/childEdu-2.jpg"
        header="ignite imagination, foster talents"
        subheading="Ensure their access to quality education"
        info=" Education not only equips children with academic knowledge but also fosters critical thinking, creativity, and problem-solving skills. It opens doors to opportunities, broadens their horizons, and instills a sense of curiosity and lifelong learning. When children are empowered through education, they become agents of change, capable of making informed decisions and positively contributing to society."
        Hs1="fa-solid fa-person-running"
        s1="No child should held back by limitations"
        if1=" let's empower children to rewrite their stories and create a brighter tomorrow"
        Hs2="fa-solid fa-bolt"
        s2=" nurture the potential of the next generation"
        if2="Your generosity can inspire children to believe in themselves and pursue their dreams fearlessly"
        Hs3="fa-solid fa-atom"
        s3="Be a catalyst for change in a child's life"
        if3="build their self-confidence, develop their skills, and empower them to overcome obstacles."
      />
      <DonateComponent action="Educate a child" img="/childEdu-4.jpg" />
      <SupportedNgoBanner />
      <ShareBanner />
      <Footer />
    </>
  );
};

export default ChildEmpowerment;
