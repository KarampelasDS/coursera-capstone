import "./HeroSection.css";
import Button from "../Button/Button";

export default function HeroSection(props) {
  return (
    <main className="HeroSection">
      <section className="container">
        <div className="HeroRow row">
          <div className="col-lg-8 col-md-6 mainSection">
            <h1 className="HeroTitle">{props.Title}</h1>
            <span className="HeroSpan">{props.subTitle}</span>
            <p className="HeroParagraph">
              {props.text}
            </p>
            {props.button ? <Button link="/reservations">{props.buttonText}</Button> : null}
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="ImageContainer">
              <img className="HeroImage" src={props.img} width={400} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
