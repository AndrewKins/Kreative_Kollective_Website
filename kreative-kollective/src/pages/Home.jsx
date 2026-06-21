import { useState, useCallback } from "react";
import Preloader from "../components/Preloader";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import TeamsPreview from "../components/TeamsPreview";
import ProgramsPreview from "../components/ProgramsPreview";
import Footer from "../components/Footer";
import AnnouncementBar from "../components/AnnouncementBar";

function Home() {
  const [loading, setLoading] = useState(() => {
    return sessionStorage.getItem("preloaderShown") !== "true";
  });

  const handlePreloaderComplete = useCallback(() => {
    sessionStorage.setItem("preloaderShown", "true");
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      <AnnouncementBar />
      <Hero />
      <Mission />
      <TeamsPreview />
      <ProgramsPreview />
      <Footer />
    </>
  );
}

export default Home;