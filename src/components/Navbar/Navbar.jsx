import Logo from "../../assets/Logo.svg"
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css"

export default function Navbar() {

    return(
        <header>
            <nav className="Navbar">
                <ul>
                    <li id="logo"><a href="/"><img src={Logo}/></a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/order">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                    <li id="hamburger"><RxHamburgerMenu size={40}/></li>
                </ul>
            </nav>
        </header>
    );
}