import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import SkillTree from "./components/SkillTree";
import Conctat from "./components/Conctat";
import Footer from "./components/footer";
import Portfolio from "./components/mygallary";
const App: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About/>
      <SkillTree/>
      <Portfolio/>
      <Conctat/>
      <Footer/>
    </div>
  );
};

export default App;
