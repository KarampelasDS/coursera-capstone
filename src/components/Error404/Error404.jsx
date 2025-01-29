import "./Error404.css"
import Footer from "../Footer/Footer"
import  {Link} from "react-router-dom"

export default function Error404(){

    return(
        <nav className="Error404">
        <h1 className="Header404">404</h1>
        <p className="Paragraph404">This page doesn't exist</p>
        <p className="Paragraph404">Maybe it will at some point</p>
        <p className="Paragraph404">In the meantime check out the pages that do exist for now:</p>
        <div className="LinksContainer">
        <Link to="/">Home</Link>
        <Link to="/reservations">Reservations</Link>
        </div>
        </nav>
        );
}