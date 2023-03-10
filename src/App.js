import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navigation, Footer, Responce } from "./components";
import {
  Main,
  SafetyInfo,
  About,
  NotFound,
  Privacy,
  Terms,
  Guide,
} from "./pages";
function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/tinos-island-guide" element={<Guide />} />
        <Route exact path="/quick-pickup" element={<h1>Quick-Pickup</h1>} />
        <Route exact path="/safety" element={<SafetyInfo />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-conditions" element={<Terms />} />
        <Route path="/responce" element={<Responce />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
