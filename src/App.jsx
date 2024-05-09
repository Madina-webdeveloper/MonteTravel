import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Destination from "./components/Destination";
import LastSection from "./components/LastSection";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Destination />
        <LastSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
