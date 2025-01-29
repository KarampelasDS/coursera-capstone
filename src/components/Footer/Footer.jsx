import "./Footer.css"
import WorkerFooter from "../../assets/WorkerFooter.png"
import {Link} from "react-router-dom"

export default function Footer(props){
    
    return(
        <div className={props.dark ? "Footer" : "FooterLight"}>
            <img className="FooterImage" src={WorkerFooter}/>
            <div className={props.dark ? "FooterSection" : "FooterSectionLight"}>


                <h6 className="FooterTitle">Doormat <br/> Navigation</h6>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/reservations">Reservations</Link>
                <Link to="/order">Order Online</Link>
                <Link to="/login">Login</Link>
            </div>
            <div className={props.dark ? "FooterSection" : "FooterSectionLight"}>
                <h6 className="FooterTitle">Contact <br/><br/></h6>
                <Link to="/address">Address</Link>
                <Link to="/contact">Phone Number</Link>
                <Link to="/email">Email</Link>
            </div>
            <div className={props.dark ? "FooterSection" : "FooterSectionLight"}>
                <h6 className="FooterTitle">Social Media Links <br/><br/></h6>
                <Link to="/address">Address</Link>
                <Link to="/contact">Phone Number</Link>
                <Link to="/email">Email</Link>
            </div>


                </div>
    );
}