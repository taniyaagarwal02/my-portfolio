import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MobileFooter from "./components/MobileFooter";
import About from "./components/About";
import Skills from "./components/Skills";
import backgroundImage from "./assets/port.jpg";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

const App = () => {
  const [activeSection, setActiveSection] = useState("about");

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "resume":
        return <Resume />;
      case "contact":
        return <Contact />;

      default:
        return <About />;
    }
  };

  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Fixed Top Navbar */}
      <Navbar setActiveSection={setActiveSection} />

      {/* Fixed Sidebar (Desktop) */}
      <Sidebar />

      {/* Fixed Footer (Mobile only) */}
      <MobileFooter />

      {/* Main Content based on selected section */}
      <div className="pt-24 md:ml-72 pb-16 px-6">
        <div className="max-w-7xl mx-auto">{renderSection()}</div>
      </div>
    </div>
  );
};

export default App;
