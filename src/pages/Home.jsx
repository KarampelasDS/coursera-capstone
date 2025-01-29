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
            <HeroSection Title="Little Lemon" subTitle="Chicago" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, sunt
              quia voluptatibus, ratione maiores libero ea illum nulla
              repudiandae dicta nobis doloremque amet unde. Beatae at modi
              nesciunt explicabo eum!" button={true} buttonText="Reserve a Table" img={heroImage}/>
            <SpecialsSection/>
            <ReviewsSection/>
            <InfoSection title="Little Lemon" subText="Chicago" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <Footer dark={true}/>
        </>
    );
}