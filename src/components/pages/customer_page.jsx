import "./customer_page.css";

export default function Customer() {
   return (
      <div className="Customer-page">
         <div className="Customer-information">
            <div className="Customer_maine-text">
               <span>Firmy pro</span> které jsme <br /> pracovali
            </div>
         </div>

         <div className="Customer-logos">
            <div className="scroll-container">
               <div className="scroll-content">
                  <img src="/Company=Hotjar.png" alt="Logo 1" />
                  <img src="/Company=Lattice.png" alt="Logo 2" />
                  <img src="/Company=Mailchimp.png" alt="Logo 3" />
                  <img src="/Company=Monzo.png" alt="Logo 4" />
                  <img src="/Company=Squarespace.png" alt="Logo 5" />

                  <img src="/Company=Hotjar.png" alt="Logo 1" />
                  <img src="/Company=Lattice.png" alt="Logo 2" />
                  <img src="/Company=Mailchimp.png" alt="Logo 3" />
                  <img src="/Company=Monzo.png" alt="Logo 4" />
                  <img src="/Company=Squarespace.png" alt="Logo 5" />
               </div>
            </div>
         </div>
      </div>
   );
}
