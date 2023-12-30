import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Ginko from "./pages/Ginko";
import Mushishi from "./pages/Mushishi";
import Mushi from "./pages/Mushi";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/mushishi" element={<Mushishi />} />
          <Route path="/ginko" element={<Ginko />} />
          <Route path="/mushi" element={<Mushi />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
