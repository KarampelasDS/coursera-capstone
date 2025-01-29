import "./Button.css"
import { Link } from "react-router-dom";

export default function Button(props) {
    return(
        <Link to={props.link}><button className="Button">{props.children}</button></Link>
    )
}