import "./InfoSection.css"
import Workers from "../../assets/Workers.png"
import Workers2 from "../../assets/Workers2.png"


export default function InfoSection(props) {

    return(
        <div className={props.dark ? "InfoBackgroundDark" : "InfoBackground"}>
        <article className="container InfoSection">
            <div className="row">
                <div className="col-lg-6 ">
                    <h1 className={props.dark ? "InfoTitleDark" : "InfoTitle"}>{props.title}</h1>
                    <p className={props.dark ? "InfoCityDark" : "InfoCity"}>{props.subText}</p>
                    <p className={props.dark ? "InfoParagraphDark" : "InfoParagraph"}>{props.text}</p>
                </div>
                <div className="col-lg-6  InfoPhotos">
                    <img className="InfoPhoto1" src={Workers}/>
                    <img className="InfoPhoto2" src={Workers2}/>
                </div>
            </div>
        </article>
        </div>
    );
}