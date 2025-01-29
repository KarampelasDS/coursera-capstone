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
              description="A classic Mediterranean dish packed with fresh cucumbers, ripe tomatoes, red onions, Kalamata olives, and a generous sprinkle of feta cheese.This refreshing salad is a perfect way to start your meal."
              />
            <SpecialCard
              img={Bruchetta}
              title="Bruschetta"
              price="$7.99"
              description="Crisp toasted bread topped with a mix of diced tomatoes, garlic, basil, and a drizzle of balsamic glaze. This simple yet extremely delicious appetizer is a favorite here at Little Lemon."
              />

            <SpecialCard
              img={LemonDessert}
              title="Lemon Dessert"
              price="$9.99"
              description="A light, creamy lemon mousse with a hint of vanilla and a touch of sweetness. Topped with whipped cream and a zest of lemon peel, it’s the perfect ending to your Mediterranean dining experience."
              />
          </Slider>
        </div>
      </div>
    </div>
              </div>
  );
}
