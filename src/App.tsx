
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Content from "./Components/Content";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import WorkigWithUs from "./Components/WorkigWithUs";
import  Pricing  from "./Components/Pricing";
import ContactUs from "./Components/ContactUs";
import ContactForm from "./Components/ContactForm";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Content />
      <Projects /> 
      <WorkigWithUs />
      <ContactUs/>
        <ContactForm/>   
      <Pricing/>
      <Footer />
    </>
  );
}

export default App;
