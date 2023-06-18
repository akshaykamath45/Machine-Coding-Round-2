import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { ArchivedHabits } from "./pages/ArchivedHabits";
import {LandingPage} from "./pages/LandingPage";
const App = () => {
  return (
    <div className="app">

      <nav>
        <NavLink to="/">Home</NavLink> || 
        <NavLink to="/archived">Archived</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/archived" element={<ArchivedHabits />}></Route>
      </Routes>
    </div>
  );
};

export default App;
