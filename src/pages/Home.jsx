import heroImage from "../assets/restaurant.jpg";

import HeroSection from "../components/HeroSection/HeroSection";
import SpecialsSection from "../components/SpecialsSection/SpecialsSection";
import ReviewsSection from "../components/ReviewsSection/ReviewsSection"
import InfoSection from "../components/InfoSection/InfoSection"
import Footer from "../components/Footer/Footer"
import {useEffect} from "react"

export default function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <>
            <HeroSection Title="Little Lemon" subTitle="Chicago" text="Welcome to Little Lemon, your go-to spot for authentic Mediterranean flavors in the heart of Chicago. Our cozy atmosphere and exceptional dishes bring the Mediterranean directly to you." button={true} buttonText="Reserve a Table" img={heroImage}/>
            <SpecialsSection/>
            <ReviewsSection/>
            <InfoSection title="Little Lemon" subText="Chicago" text="Little Lemon is led by brothers Adryan and Mario, passionate about serving authentic Mediterranean dishes. Adryan specializes in seafood, while Mario adds a creative touch to salads and desserts."/>
            <Footer dark={true}/>
        </>
    );
}