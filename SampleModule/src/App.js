import React from "react";
import "./App.css";
import AppBar from "components/AppBar";
import MasterPage from "pages/MasterPage";
import SecondPage from "pages/SecondPage";
import NotFound from "pages/NotFound";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <div className="App full-height">
      <AppBar />
      
      <Routes>
      <Route path="*" element={<MasterPage />} />
        <Route path="/secondpage" element={<SecondPage />} />
      </Routes>
    </div>
    </Router>
  );
};

export default App;