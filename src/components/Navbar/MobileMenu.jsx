import { Link } from "react-router-dom"
import "./Navbar.css"

export default function MobileMenu(props){

    return(
        <nav className="MobileMenuLinks">
            <ul>
            <li><Link onClick={props.handleClick} to="/">Home</Link></li>
            <li><Link onClick={props.handleClick} to="/about">About</Link></li>
            <li><Link onClick={props.handleClick} to="/menu">Menu</Link></li>
            <li><Link onClick={props.handleClick} to="/reservations">Reservations</Link></li>
            <li><Link onClick={props.handleClick} to="/order">Order Online</Link></li>
            <li><Link onClick={props.handleClick} to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}