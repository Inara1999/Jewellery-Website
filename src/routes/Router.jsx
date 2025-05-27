import React from "react"
import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home";
import Aboutus from "../pages/Aboutus";
import Store from "../pages/Store";
import Earrings from "../pages/Earrings"
import Rings from "../pages/Rings";
import Necklace from "../pages/Necklace";
import MyAccount from "../pages/MyAccount";
import Contactus from "../pages/Contactus";


function Router(){
    return(

<Routes>
<Route path="/" element={<Home />}/>
<Route path="/home" element={<Home />}/>
<Route path="/about-us" element={<Aboutus />}/>
<Route path="/store" element={<Store />}/>
<Route path="/earrings" element={<Earrings />}/>
<Route path="/rings" element={<Rings />}/>
<Route path="/necklace" element={<Necklace />}/>
<Route path="/my-account" element={<MyAccount/>}/>
<Route path="/contact-us" element={<Contactus />}/>
</Routes> 
  );
}

export default Router