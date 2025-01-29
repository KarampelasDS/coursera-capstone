import heroImage from "../assets/Food.png"

import HeroSection from "../components/HeroSection/HeroSection"
import ReservationFormSection from "../components/ReservationFormSection/ReservationFormSection"
import InfoSection from "../components/InfoSection/InfoSection"
import Footer from "../components/Footer/Footer"


export default function Reservations() {

    return(
        <>
            <HeroSection Title="Little Lemon" subTitle="Chicago" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, sunt
              quia voluptatibus, ratione maiores libero ea illum nulla
              repudiandae dicta nobis doloremque amet unde. Beatae at modi
              nesciunt explicabo eum!" button={false} img={heroImage}/>
            <ReservationFormSection/>
            <InfoSection dark={true} title="Little Lemon" subText="Chicago" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <Footer/>
        </>
    )
}