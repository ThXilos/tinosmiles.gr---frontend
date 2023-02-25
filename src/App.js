import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navigation, Footer } from "./components";
import { Main } from "./pages";
function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/about" element={<h1>About Page</h1>} />
        <Route
          exact
          path="/tinos-island-guide"
          element={<h1>Guide to the island</h1>}
        />
        <Route exact path="/quick-pickup" element={<h1>Quick-Pickup</h1>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
