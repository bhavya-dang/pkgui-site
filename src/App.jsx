import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import Installation from "../components/Installation.jsx";
import Keybindings from "../components/Keybindings.jsx";
import Roadmap from "../components/Roadmap.jsx";
import Footer from "../components/Footer.jsx";
import NoiseBackground from "../components/NoiseBackground.jsx";

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <NoiseBackground />
      <Header />
      <Hero />
      <div className="px-5 sm:px-8 lg:px-10">
        <div className="border-t border-[var(--border)]" />
      </div>
      <Features />
      <div className="px-5 sm:px-8 lg:px-10">
        <div className="border-t border-[var(--border)]" />
      </div>
      <Installation />
      <div className="px-5 sm:px-8 lg:px-10">
        <div className="border-t border-[var(--border)]" />
      </div>
      <Keybindings />
      <div className="px-5 sm:px-8 lg:px-10">
        <div className="border-t border-[var(--border)]" />
      </div>
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
