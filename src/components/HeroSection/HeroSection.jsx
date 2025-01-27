import heroImage from "../../assets/restaurant.jpg";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <main>
      <section className="HeroSection container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 mainSection">
            <h1>Little Lemon</h1>
            <span>Chicago</span>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, sunt
              quia voluptatibus, ratione maiores libero ea illum nulla
              repudiandae dicta nobis doloremque amet unde. Beatae at modi
              nesciunt explicabo eum!
            </p>
            <button>Reserve a Table</button>
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
