
import "../index.css";
import { InfoPage } from "./Components/Pages/InfoPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RegisterPage } from "./Components/Pages/RegisterPage";
import { LoginPage } from "./Components/Pages/LoginPage";

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<InfoPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
     </Router>
    </>
  );
}

export default App;
