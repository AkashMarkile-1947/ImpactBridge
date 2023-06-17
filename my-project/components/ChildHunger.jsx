import { useState } from 'react';
import './tailwind.css';
import {Hero, DonateComponent, SupportedNgoBanner, HungerSection2, HungerSection, ShareBanner} from './Mission_template';
import Footer from './Footer';


const ChildHunger = () => {
    return (
        <>
            <Hero mission="No Child Hungry" tagline="Save children from malnutrition" footerT="children waiting to be sponsored" action="Feed a child" />
            <HungerSection />
            <HungerSection2 />
            <DonateComponent action="Feed a child"/>
            <SupportedNgoBanner />
            <ShareBanner />
            <Footer />
        </>
    )
}



export default ChildHunger;