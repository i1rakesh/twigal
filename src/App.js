import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Login/Register";
import Login from "./components/Login/Login";
// import { Router, Route, Routes } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
