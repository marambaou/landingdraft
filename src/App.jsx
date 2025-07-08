import "./index.css";
import React from "react";
import "./App (2).css";

import Header from "./Header.jsx";
import Integrity from "./integrity.jsx";
import Reviews from "./reviews.jsx";
import Footer from "./footer.jsx";
import HeroSection from './HeroSection';

import AboutUsSection from './AboutUsSection';
import SpecialtySection from './Specialty';



export default function App(){

  
return(
<div className="smooth-scroll  p-2"  id="container  "  >
<Header/>
<HeroSection/>
<AboutUsSection/>
<SpecialtySection/>
<Integrity/>
<Reviews/>
<Footer/>
    
    </div>
     


 

)

}
