import "./SpecialsSection.css";
import Button from "../Button/Button";
import SpecialCard from "../SpecialCard/SpecialCard";
import GreekSalad from "../../assets/greek salad.jpg";
import Bruchetta from "../../assets/bruchetta.svg";
import LemonDessert from "../../assets/lemon dessert.jpg";

export default function SpecialsSection() {
  return (
    <section className="SpecialsSection">
      <div className="row">
        <div className="col-6">
          <h1 className="SpecialsTitle">This week's specials!</h1>
        </div>
        <div className="col-6">
          <Button>Online Menu</Button>
        </div>
      </div>
        <div className="SpecialsHolder container">
          <div className="col">
            <SpecialCard
              img={GreekSalad}
              title="Greek Salad"
              price="$12.99"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
          <div className="col">
            <SpecialCard
              img={Bruchetta}
              title="Bruchetta"
              price="$7.99"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
          <div className="col">
            <SpecialCard
              img={LemonDessert}
              title="Lemon Dessert"
              price="$9.99"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
        </div>
    </section>
  );
}
