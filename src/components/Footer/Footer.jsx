import "./Footer.css"
import WorkerFooter from "../../assets/WorkerFooter.png"

export default function Footer(){
    
    return(
        <div className="Footer">
            <img src={WorkerFooter}/>
            <div className="FooterSection">
                <h6 className="FooterTitle">Doormat <br/> Navigation</h6>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Menu</a>
                <a href="#">Reservations</a>
                <a href="#">Order Online</a>
                <a href="#">Login</a>
            </div>
            <div className="FooterSection">
                <h6 className="FooterTitle">Contact <br/><br/></h6>
                <a href="#">Address</a>
                <a href="#">Phone Number</a>
                <a href="#">Email</a>
            </div>
            <div className="FooterSection">
                <h6 className="FooterTitle">Social Media Links <br/><br/></h6>
                <a href="#">Address</a>
                <a href="#">Phone Number</a>
                <a href="#">Email</a>
            </div>
        </div>
    );
}