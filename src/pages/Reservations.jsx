import heroImage from "../assets/Food.png"

import HeroSection from "../components/HeroSection/HeroSection"
import ReservationFormSection from "../components/ReservationFormSection/ReservationFormSection"
import InfoSection from "../components/InfoSection/InfoSection"
import Footer from "../components/Footer/Footer"
import {useEffect} from "react"


export default function Reservations() {

    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);

    return(
        <>
            <HeroSection Title="Little Lemon" subTitle="Chicago" text="Secure your spot at Little Lemon for a cozy, unforgettable meal with Mediterranean flavors. Whether it's a special occasion or a casual night out, we’re here to make your dining experience memorable. Reserve today and enjoy a warm, inviting atmosphere!" button={false} img={heroImage}/>
            <ReservationFormSection/>
            <InfoSection dark={true} title="Little Lemon" subText="Chicago" text="Little Lemon is led by brothers Adryan and Mario, passionate about serving authentic Mediterranean dishes. Adryan specializes in seafood, while Mario adds a creative touch to salads and desserts."/>
            <Footer/>
        </>
    )
}