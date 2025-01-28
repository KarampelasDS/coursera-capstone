import "./InfoSection.css"
import Workers from "../../assets/Workers.png"
import Workers2 from "../../assets/Workers2.png"


export default function InfoSection() {

    return(
        <article className="container InfoSection">
            <div className="row">
                <div className="col-lg-6 ">
                    <h1 className="InfoTitle">Little Lemon</h1>
                    <p className="InfoCity">Chicago</p>
                    <p className="InfoParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="col-lg-6  InfoPhotos">
                    <img className="InfoPhoto1" src={Workers}/>
                    <img className="InfoPhoto2" src={Workers2}/>
                </div>
            </div>
        </article>
    );
}