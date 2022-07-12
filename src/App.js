import Main from "./components/Home/Main";
import AdminMain from "./components/Admin/Main"
import Navbar from './components/Home/Navbar'
import MarksMain from "./components/Marks/MarksMain";
import { Routes, Route,  BrowserRouter } from "react-router-dom";
import Form from "./components/Form/Form";
import Footer from "./components/Home/Footer";
import Login from "./components/Login/Login";
import MarkersMain from "./components/Admin/Marker/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Main/>}/>
          <Route path="/marks" element={<MarksMain />}/>
          <Route path="/upload" element={<Form />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/admin" element={<AdminMain/>}/>
          <Route path="/marker" element={<MarkersMain/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
