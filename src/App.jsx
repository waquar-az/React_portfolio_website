import About from "./components/About";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

export default function App() {
  return (
    <>
       <Navbar />
        <Hero />
        <About/>
        <Work />
        <Skills />
        <Certification />
        <Contact />
        <Footer />
    </>
    // <h1 classNameName="text-4xl font-bold underline">
    //   Hello world!
    // </h1>
  )
}
