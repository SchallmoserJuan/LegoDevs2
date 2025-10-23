import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Bitacora from "./pages/Bitacora/Bitacora";
import ProfilePage from "./pages/Profile/ProfilePage";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bitacora" element={<Bitacora />} />
            <Route path="/profile/:name" element={<ProfilePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;