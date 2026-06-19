import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Teams from "./pages/Teams";
import BookUs from "./pages/BookUs";
// import Programs from "./pages/Programs";
// import JoinKK from "./pages/JoinKK";
import Events from "./pages/Events";
// import BookUs from "./pages/BookUs";
import Donate from "./pages/Donate";
// import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";



function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/teams" element={<Teams />} />
        {/* <Route path="/programs" element={<Programs />} /> */}
        
        {/* <Route path="/join" element={<JoinKK />} /> */}
        <Route path="/events" element={<Events />} />
        <Route path="/bookus" element={<BookUs />} />
        <Route path="/donate" element={<Donate />} />
        {/* <Route path="/gallery" element={<Gallery />} /> */}
        <Route path="/contact" element={<Contact />} /> 
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
