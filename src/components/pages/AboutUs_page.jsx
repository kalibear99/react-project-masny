import "./AboutUs_page.css"
import { GoArrowRight } from "react-icons/go";

export default function AboutUs () {
   return(
    <div id="aboutus" className="AboutUs-page">
        <div className="AboutUs-information">
            <div className="AboutUs_maine-text">
                <h1><span>O naší </span><br></br>
                   společnosti 
                </h1>
            </div>
            <div className="AboutUs_info-text">
                <p>Jsme softwarová společnos s vášní pro moderní technologie a inovace. 
                    <br></br>Zaměřujeme se na vývoj digitálních řešení, která pomáhají našim <br></br>klientům růst a dosahovat jejich cílů. 
                    <br></br>Naše práce je postavena na individuálním přístupu, <br></br>důrazu na detail a dlouhodobé spolupráci. 
                <br></br>Důvěra a spokojenost klientů jsou pro nás na prvním místě.</p>
            </div>
            <div className="AboutUs-button">
                <a href="#form" className="AboutUs_btn-text">Více o nás <GoArrowRight className="icon-style"/></a>
            </div>
        </div>

        <div className="AboutUs-image">
           <img src="/laptop.webp" alt="" />
        </div>
    </div>
   );
}   