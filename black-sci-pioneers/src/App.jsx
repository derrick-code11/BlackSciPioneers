import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// components
import Header from "./components/Header";
import Scientists from "./components/Scientists";
import Error from "./components/Error";
import Footer from "./components/Footer";

// pages
import WebApp from "./pages/WebApp";
import Documentation from "./pages/Documentation";
import Purpose from "./pages/Purpose";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Scientists />} />
        <Route path="/web-app" element={<WebApp />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/purpose" element={<Purpose />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
