import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Tech";
import Exp from "./components/Exp";
import Project from "./components/Project";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
        
        {/* Background alag rakha */}
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        </div>

        {/* Content with Full Height */}
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Exp />
        <Project />

        {/* Contact Last + Flex Grow to Adjust */}
        <div className="flex-grow"></div>
        <Contact />
      </div>
    </>
  );
};

export default App;
