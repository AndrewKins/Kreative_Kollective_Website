import { useState } from "react";
import Preloader from "../components/Preloader";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import TeamsPreview from "../components/TeamsPreview";
import ProgramsPreview from "../components/ProgramsPreview";
import Footer from "../components/Footer";

function Home() {
    const [loading, setLoading] = useState(true);
    return (
        <>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div className={`transition-opacity duration-700 ${loading ? "opacity-0" : "opacity-100"}`}></div>
        <Hero />
        <Mission />
        <TeamsPreview />
        <ProgramsPreview />
        <Footer />
        </>
    );
}

export default Home;