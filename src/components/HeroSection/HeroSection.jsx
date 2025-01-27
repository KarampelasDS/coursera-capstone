import heroImage from "../../assets/restaurant.jpg";
import "./HeroSection.css";
import Button from "../Button/Button";

export default function HeroSection() {
  return (
    <main>
      <section className="HeroSection container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 mainSection">
            <h1>Little Lemon</h1>
            <span className="HeroSpan">Chicago</span>
            <p className="HeroParagraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, sunt
              quia voluptatibus, ratione maiores libero ea illum nulla
              repudiandae dicta nobis doloremque amet unde. Beatae at modi
              nesciunt explicabo eum!
            </p>
            <Button>Reserve a Table</Button>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="ImageContainer">
              <img className="HeroImage" src={heroImage} width={400} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
