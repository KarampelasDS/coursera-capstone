import "./ReviewsSection.css"
import ReviewCard from "../ReviewCard/ReviewCard"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import User1 from "../../assets/Users/User1.png"
import User2 from "../../assets/Users/User2.png"
import User3 from "../../assets/Users/User3.png"
import User4 from "../../assets/Users/User4.png"

export default function ReviewsSection() {

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        arrows:true,
        responsive: [
          {
            breakpoint: 1420,
            settings: {
              slidesToShow: 2,
              centerMode: false,
              infinite: true,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow:1,
              centerMode: false,
              infinite: true,
            },
          },
        ],
      };

    return(
        <section className="ReviewsSection">
            <h1 className="ReviewsTitle">Testimonials</h1>
            <div className="ReviewsContainer">
            <div className="Reviews">
                <Slider {...settings}>
                <ReviewCard rating={5} img={User1} name="Anthony" review='"Definitely the most authentic food in town!"'/>
                <ReviewCard rating={5} img={User2} name="Martha" review=' "Cooking that reminded me of home" '/>
                <ReviewCard rating={5} img={User3} name="Tanisha" review='"Lovely atmosphere and even lovelier food!"'/>
                <ReviewCard rating={5} img={User4} name="Peter" review='"Like a home-cooked meal, but even better!"'/>
                </Slider>
            </div>
            </div>
        </section>
    );
}