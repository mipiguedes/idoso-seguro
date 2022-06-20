import { Route, Routes, BrowserRouter } from "react-router-dom";
import { MainPage } from "./components/MainPage";
import { WelcomeSection } from "./components/WelcomeSection";
import { MedalsSection } from "./components/MedalsSection";

export const RoutesSection = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/elderly-gamification/" element={<WelcomeSection />} />
        <Route path="/elderly-gamification/jogar" element={<MainPage />} />
        <Route path="/elderly-gamification/medalhas" element={<MedalsSection />} />
      </Routes>
    </BrowserRouter>
  );
};
