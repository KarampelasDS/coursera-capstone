import { Link } from "react-router-dom"
import "./Navbar.css"

export default function MobileMenu(props){

    return(
        <nav className="MobileMenuLinks">
            <ul>
            <li><Link onClick={props.handleClick} to="/">Home</Link></li>
            <li><Link onClick={props.handleClick} to="/">About</Link></li>
            <li><Link onClick={props.handleClick} to="/">Menu</Link></li>
            <li><Link onClick={props.handleClick} to="/reservations">Reservations</Link></li>
            <li><Link onClick={props.handleClick} to="/">Order Online</Link></li>
            <li><Link onClick={props.handleClick} to="/">Login</Link></li>
            </ul>
        </nav>
    )
}