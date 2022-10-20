import "./App.css";
 import React, { useState } from "react";
 import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Header/Home";
 import About from "./Components/Header/About";
 import Navbar from "./Components/Header/Navbar";
 import Contact from "./Components/Header/Contact";
//  import Headlines from "./Components/Header/Headlines";
 import Footer from "./Components/Footer/Footer";
//  import Theme from "./Components/Header/Theme";

function App() {
 

  const [partochild, setpartochild] = useState("");
  function getinputValue(val) {
    console.log(val);
    setpartochild(val);
  }
  return (
    <div>
      
      <header>
        <BrowserRouter>
          <Navbar getfun={getinputValue} />
          <Routes>
            <Route path="/" element={<Home part={partochild} />}></Route>
            <Route path="/about" element={<About />}></Route>
            {/* <Route path="/headlines/" element={<Headlines />}</Route> */}
            <Route path="/contact/" element={<Contact />}></Route>
          </Routes>
          {/* <Theme /> */}
        </BrowserRouter>
      </header>

      <Footer />
    </div>
  );
}

export default App;
