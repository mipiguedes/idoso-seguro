import { Route, Routes, HashRouter } from "react-router-dom";
import { MainPage } from "./components/MainPage";
import { WelcomeSection } from "./components/WelcomeSection";
import { MedalsSection } from "./components/MedalsSection";

export const RoutesSection = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/idoso-seguro/" element={<WelcomeSection />} />
        <Route path="/idoso-seguro/jogar" element={<MainPage />} />
        <Route path="/idoso-seguro/medalhas" element={<MedalsSection />} />
      </Routes>
    </HashRouter>
  );
};
