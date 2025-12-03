import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Mediaroom from "./pages/Mediaroom";
import Contribute from "./pages/Contribute";
import About from "./pages/About";
import Collaborators from "./pages/Collaborators";
import Career from "./pages/Career";

import DevelopmentBanking from "./pages/services/DevelopmentBanking";
import Research from "./pages/services/Research";
import Finance from "./pages/services/Finance";
import Hr from "./pages/services/Hr";
import Technology from "./pages/services/Technology";
import Marketing from "./pages/services/Marketing";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route element={<Error />} path="*"></Route>
          <Route element={<Home />} path="/"></Route>
          <Route element={<Mediaroom />} path="/mediaroom"></Route>
          <Route element={<Contribute />} path="/contribute"></Route>
          <Route element={<About />} path="/about"></Route>
          <Route element={<Collaborators />} path="/collaborators"></Route>
          <Route element={<Career />} path="/careers"></Route>

          {/* Services */}
          <Route element={<DevelopmentBanking />} path="/developmentBanking"></Route>
          <Route element={<Research />} path="/research"></Route>
          <Route element={<Finance />} path="/finance"></Route>
          <Route element={<Hr />} path="/hr"></Route>
          <Route element={<Marketing />} path="/marketing"></Route>
          <Route element={<Technology />} path="/technology"></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

// Error Page Component
const Error = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <div className="text-9xl font-bold text-blue-600 mb-4">404</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 text-lg mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>
        <Link
          to="/"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default App;