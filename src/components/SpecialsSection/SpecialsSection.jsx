import "./SpecialsSection.css";
import Button from "../Button/Button";
import SpecialCard from "../SpecialCard/SpecialCard";
import GreekSalad from "../../assets/greek salad.jpg";
import Bruchetta from "../../assets/bruchetta.svg";
import LemonDessert from "../../assets/lemon dessert.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SpecialsSection() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="ReviewsBackground">

    <div className="container SpecialsSection">
      <div className=" SpecialsHeader">
          <h1 className="SpecialsTitle">This week's specials!</h1>
          <Button link="/menu">Online Menu</Button>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="SpecialsContainer">
          <Slider {...settings}>
            <SpecialCard
              img={GreekSalad}
              title="Greek Salad"
              price="$12.99"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            <SpecialCard
              img={Bruchetta}
              title="Bruchetta"
              price="$7.99"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />

            <SpecialCard
              img={LemonDessert}
              title="Lemon Dessert"
              price="$9.99"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
          </Slider>
        </div>
      </div>
    </div>
              </div>
  );
}
