import "./navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <a href="#homepage">
                    <img src="/logo.png" alt="Logo"/>
                </a>
            </div>
            <div className="nav-menu">
                <ul className="nav-links">
                    <li><a href="#services">Služby</a></li>
                    <li><a href="#aboutus">O nás</a></li>
                    <li><a href="#contact">Kontakt</a></li>
                </ul>
            </div>
        </nav>
    );
}