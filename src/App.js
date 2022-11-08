import React from "react";
import Register from "./components/Login/Register";
import Login from "./components/Login/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Register />} />
    //   <Route path="/Signin" element={<Login />} />
    // </Routes>
    <div>
        
    <Login/>
    </div>
  );
}

export default App;
