import Navbar from "./components/navbar/navbar"
import HomePage from "./components/pages/home_page"
import Services from "./components/pages/services_page";
import AboutUs from "./components/pages/AboutUs_page";
import Customer from "./components/pages/customer_page";
import Contact from "./components/pages/contact_page";
import Footer from "./components/footer/footer";

export default function App() {
    return (
      <div>
        <Navbar/>
        <HomePage/>
        <Services/>
        <AboutUs/>
        <Customer/>
        <Contact/>
        <Footer/>
      </div>                      
    );
}