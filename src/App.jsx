

import { InfoPage } from "./Components/Pages/InfoPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RegisterPage } from "./Components/Pages/RegisterPage";
import { LoginPage } from "./Components/Pages/LoginPage";
import { AppIframePage } from "./Components/Pages/AppIframePage";
import { AppContext } from "./Components/Context/AppContext";
import { useState } from "react";
import LoginModal from "./Components/UI/LoginModal";
import { Button, Spinner } from "react-bootstrap";
import { LoadingModal } from "./Components/UI/LoadingModal";

function App() {
  const [url, setNCUrl] = useState();
  const [isAuthenticated, setIsAuthenticated]=useState(false);
  const [isLoaded, setIsloaded] = useState(false);

  const handleLoaded= ()=>{
    setIsloaded(true);
  }
  return (
    <>
    <AppContext.Provider value={{url, setNCUrl, isAuthenticated, setIsAuthenticated}}>
      {isAuthenticated?<div><iframe id="app_iframe" onLoad={handleLoaded}  allowFullScreen src={url} style={{position:"fixed", top:0, left:0, bottom:0, right:0, width:"100%", height:"100%", border:"none", margin:0, padding:0, overflow:"hidden"}}/>{!isLoaded && <LoadingModal/>}</div>:   <InfoPage/>}
   
      
     {/* <Router>
      <Routes>
        <Route path="/" element={<InfoPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/App" element={<AppIframePage/>} />
      </Routes>
     </Router> */}
     </AppContext.Provider>
    </>
  );
}

export default App;
