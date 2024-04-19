import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Home from "./pages/Home";
import Authentication from "./components/Authentication";
import AboutInfo from "./pages/AboutInfo";
import { useState } from "react";
import NavBar from "./pages/NavBar";
import Authenticate from "./components/context/Authenticate";
// import { useAuthenticateContext } from "./components/context/Authenticate";
function App() {
  const [spreadData, setSpreadData] = useState([]);
  // const { authenticate } = useAuthenticateContext();

  return (
    <Authenticate>
      <div className="App">
      <NavBar/>
        {/* {authenticate && */}
        <Routes>
       
          <Route path="/" element={<Authentication />}>
            <Route path="/" element={<Home setSpreadData={setSpreadData} />} />
            <Route
              path="/about"
              element={<AboutInfo spreadData={spreadData} />}
            />
            <Route path="/logout" element={<LoginForm />} />
          </Route>
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </Authenticate>
  );
}

export default App;
