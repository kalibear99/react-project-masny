import "./contact_page.css"

export default function Contact () {
   return(
    <div id="contact" className="contact-page">
        <div className="contact_maine-text">
            <h1>Kontaktujte nás.</h1>
        </div>

        <div className="contact_map-form">

        <div className="contact-map">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.609250551443!2d17.69329847632812!3d49.22693717138454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713736217f47a19%3A0x13c5fafd124ff449!2zU3TFmWVkbsOtIMWha29sYSBCYWx0YWNpIHMuci5vLg!5e0!3m2!1scs!2scz!4v1733175641647!5m2!1scs!2scz"
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
        />
        </div>
        <div className="contact-form">
            <form className="my-form">
                <div className="name-section">
                    <div className="name-input">
                        <label>Jméno *</label>
                        <input
                        type="text"
                        id="jmeno"
                        name="jmeno"
                        required
                        />
                    </div>
                    <div className="name-input">
                        <label>Příjmení *</label>
                        <input
                        type="text"
                        id="prijmeni"
                        name="prijmeni"
                        required
                        />
                    </div>
                </div>
                
                <div className="email-section">
                <label>Email *</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="@"
                    required
                />
                </div>

                <div className="zprava-section">
                <label>Zpráva:</label>
                <textarea
                    id="zprava"
                    name="zprava"
                    rows="4"
                    required
                    placeholder="Jak vám mohu pomoci?"
                ></textarea>
                </div>

                <button type="submit">Odeslat</button>
            </form>
            </div>
        </div>
    </div>
   );
}   