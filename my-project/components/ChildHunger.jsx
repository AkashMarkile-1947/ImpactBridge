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
import Nav from "./Navbar";
import Footer from "./Footer";

const ChildHunger = () => {
  return (
    <>
      <Hero
        mission="No Child Hungry"
        tagline="Save children from malnutrition"
        footerT="children waiting to be sponsored"
        action="Feed a child"
      />
      <HungerSection
        header="Help feed poor children"
        subheading="Provide them with regular nutrition"
        info="Feeding poor children is a critical issue that requires immediate attention and support. Every day, millions of children around the world go to bed hungry, facing the devastating consequences of malnutrition and food insecurity. Lack of access to nutritious meals not only hampers their physical growth but also affects their cognitive development and overall well-being. Addressing this issue is essential to ensure a brighter future for these vulnerable children.Proper nutrition is fundamental for children's growth, health, and educational outcomes. Malnourished children are more susceptible to illness, have lower energy levels, and struggle to concentrate in school. "
        sectionimg="/child-hunger.png"
      />
      <HungerSection2
        Simg="/hunger-2.png"
        header="A Crisis We Must Address"
        subheading="Provide them with regular nutrition"
        info="Child hunger is not just about empty stomachs in the present moment; it has long-lasting effects that ripple through a child's entire life. The persistent lack of proper nutrition during critical developmental stages can severely hinder a child's growth, leading to stunted physical and cognitive development. Malnutrition weakens their immune system, making them more susceptible to diseases and infections. Moreover, hunger often forces children to prioritize survival over education, depriving them of the opportunity to acquire essential knowledge and skills"
        s1="Save a child from malnutrition"
        if1="Ensure healthy growth for all children"
        Hs1="fa-solid fa-bowl-food"
        s2=" unlock a child's potential"
        if2="Help us fight child hunger and give them a chance at a brighter future"
        Hs2="fa-solid fa-disease"
        s3="Help eradicate hunger"
        if3="Well nourished children is a move towards a hunger-free future"
        Hs3="fa-solid fa-people-group"
      />
      <DonateComponent action="No child Hungry" img="/Child-Hunger-cover.jpg" />
      <SupportedNgoBanner />
      <ShareBanner />
      <Footer />
    </>
  );
};


export default ChildHunger;
