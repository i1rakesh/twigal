import Home from "../src/components/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import News from "./components/News";
import Meme from "./components/Meme"

function App() {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/">
          
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route index element={<ProtectedRoute><Home /></ProtectedRoute>}/>
          <Route path="news" element={<ProtectedRoute><News /></ProtectedRoute>}/>
          <Route path="memes" element={<ProtectedRoute><Meme /></ProtectedRoute>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
