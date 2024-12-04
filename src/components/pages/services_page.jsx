import "./services_page.css"

export default function Services () {
   return(
    <div id="services" className="Services-page">
        <div className="services_maine-text">
            <h1>Naše služby</h1>
        </div>
        
        <div className="containerService">
            <div className="TypeService">
                <img className="IconService" src="/mobile-app.png"/>
                <h1>Vývoj mobilních aplikací</h1>
                <p>Vytváříme moderní mobilní aplikace, které splní vaše specifické požadavky. Zajišťujeme celý proces od návrhu po nasazení, s důrazem na kvalitu a uživatelskou přívětivost pro iOS i Android.</p>
            </div>
            <div className="TypeService">
                <img className="IconService" src="/web-code.png"/>
                <h1>Tvorba webových stránek</h1>
                <p>Navrhujeme a realizujeme webové stránky, které zaujmou designem a funkčností. Ať už jde o firemní prezentaci, e-shop nebo blog, dodáme vám řešení na míru.</p>
            </div>
            <div className="TypeService">
                <img className="IconService" src="/services-logo.png"/>
                <h1>Servis Webových stránek</h1>
                <p>Zajistíme, aby váš web byl vždy aktuální, rychlý a bezpečný. Nabízíme pravidelné aktualizace, zálohy i technickou podporu, díky které se můžete soustředit na své podnikání.</p>
            </div>
        </div>
    </div>
   );
}   