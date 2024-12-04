import "./home_page.css"

export default function HomePage () {
    return(
        <div id="homepage" className="HomePage">
            <div className="hero">
                <div className="HomeText">
                    <div className="Home_maine-text">
                        <h1>
                            <span className="maine-text_first-word">Digitální</span> <span className="maine-text_second-word">Agentura</span><br></br>
                            Layers.cz
                        </h1>
                        <div className="Home_info-text">
                        <p>
                            Designujeme a vyvíjíme webové stránky, které vašemu<br></br>podnikání přinesou úspěch.
                        </p>
                    </div>
                </div>

                    <div className="Hompage_btn">
                        <a href="#contact" className="Homepage_btn-text" >Kontaktovat</a>
                    </div>
                </div>

                <div className="Homepage-img">
                    <img src="/homepage-img.png" alt="img"/>
                </div>
            </div>

        </div>
        
    );
}