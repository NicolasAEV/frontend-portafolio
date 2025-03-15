import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import Navbar from "./components/navbar/Navbar.tsx";
import Home from "./pages/Home/Home.tsx";
import NotFound from "./pages/not-found/NotFound.tsx";

function App() {

  return (
    <Router>

      <Navbar />

      <div className="scroll-smooth">
        <div className="max-w-5xl mx-auto px-4 z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Ruta para la página 404 */}
            <Route path="/404" element={<NotFound />} />
            {/* Ruta comodín para cualquier otra URL no encontrada */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
