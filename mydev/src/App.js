import { Component } from "react";
import Navbar from "./Navbar"
import About from "./pages/About";
import Resume from "./pages/Resume";
import Project from "./pages/Project";
import Setting from "./pages/Setting";
import Footer from './Footer/footer';

function App() {
  let component 
  switch (window.location.pathname) {
    case "/":
        component = App
      break;
    case "/about":
         component = <About/>
      break;
    case "/resume":
         component = <Resume/>
       break;  
    case "/project":
        component = <Project/>
      break;
    case "/setting":
        component = <Setting/>
      break;   
  }
  return (
    <>
      <Navbar/>
      <div>
      {component}
      </div>
      <Footer/>

      
    </>
  )
}


export default App