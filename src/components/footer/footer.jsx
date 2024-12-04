import "./footer.css"
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";

export default function Footer () {
   return(
    <div className="Footer-container">
        <div className="Footer-logo">
            <a href="#homepage">
                <img src="/logo.png" alt="Logo"/>
            </a>
            <p className="footer-logo_text">© 2024 Layers.cs s.r.o</p>
        </div>
        <div className="Footer-menu">
            <ul className="footer-links">
                <li><a href="#services">Služby</a></li>
                <li><a href="#aboutus">O nás</a></li>
                <li><a href="#contact">Kontakt</a></li>
            </ul>
        </div>
        <div className="KontatFooter">
            <h1 className="footer-contact_maine-text">Kontaktovat</h1>
            <p className="EmailFooter">dory@gmail.com</p>
            <p className="PhoneFooter">+420 123 456 789</p>
            <p className="footer-adress">Dřevnická 1788, 760 01 Zlín 1</p>

            <div className="footer-icons"> 
                <a className="icons" href="https://www.facebook.com/darien.kalist?locale=cs_CZ" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={25}/>
                </a>
                <a className="icons" href="https://www.instagram.com/d.kalistt/?next=%2F" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={25} />
                </a>
                <a className="icons" href="https://twitter.com/franta1626944" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter size={25} />
                </a>
            </div>
        </div>
    </div>

   );
}   