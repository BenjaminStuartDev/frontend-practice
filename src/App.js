import React, { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/app.css";

import RootPage from "./pages/root/index.jsx";
import AbletonPage from "./pages/ableton/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="/ableton" element={<AbletonPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
