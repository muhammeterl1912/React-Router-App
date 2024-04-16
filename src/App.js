import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Home from "./pages/Home";
import Authentication from "./components/Authentication";
import AboutInfo from "./pages/AboutInfo";
import { useState } from "react";
import NavBar from "./pages/NavBar";

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  return (
    <div className="App">
      {authenticate && <NavBar setAuthenticate={setAuthenticate} />}
      <Routes>
        <Route
          path="/"
          element={<Authentication authenticate={authenticate} />}
        > <Route path="/" element={<Home setAuthenticate={setAuthenticate}/>} />
          <Route path="/about" element={<AboutInfo />} />
          <Route path="/logout" element={<LoginForm />} />
        </Route>
        <Route
          path="/login"
          element={<LoginForm setAuthenticate={setAuthenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
