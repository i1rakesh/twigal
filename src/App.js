import Home from "../src/components/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import AudioPlayer from "./components/AudioPlayer";
import ContactUs from "./components/ContactUs";
import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import News from "./components/News";
import Meme from "./components/Meme";
import Feed from "./components/roomComponents/Feed";
import UpdateUser from "./components/roomComponents/UpdateUser"
import Chatbot from "./components/Chatbot";
function App() {
  const { currentUser } = useContext(AuthContext);

  // console.log(currentUser);
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
          <Route path="music" element={<ProtectedRoute><AudioPlayer /></ProtectedRoute>}/>
          <Route path="contact" element={<ProtectedRoute><ContactUs /></ProtectedRoute>}/>
          <Route path="feed" element={<ProtectedRoute><Feed/></ProtectedRoute>}/>
          <Route path="updateProfile" element={<ProtectedRoute><UpdateUser/></ProtectedRoute>}/>
          <Route path="superchat" element={<ProtectedRoute><Chatbot/></ProtectedRoute>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
