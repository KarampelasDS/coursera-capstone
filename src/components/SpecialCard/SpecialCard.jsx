import "./SpecialCard.css"
import { MdDeliveryDining } from "react-icons/md";

export default function SpecialCard(props) {

    return(
        <article className="SpecialCard">
            <div className="SpecialDishImage">
                <img src={props.img}/>
            </div>
            <div className="SpecialHeader">
                <h3>{props.title}</h3>
                <h3>{props.price}</h3>
            </div>
            <div className="SpecialDescription">
                <p>{props.description}</p>
            </div>
            <div className="SpecialOrderButton">
                <span>Order a delivery </span>
                <MdDeliveryDining />
            </div>
        </article>
    );
}