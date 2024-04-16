import Home from "./pages/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SearchUser from "./components/SearchUser";
import Authentication from "./components/Authentication";
import AboutInfo from "./components/AboutInfo";
import { useState } from "react";

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  return (
    <div className="App">
      <Home setAuthenticate={setAuthenticate} />
      <Routes>
        <Route
          path="/"
          element={<Authentication authenticate={authenticate} />}
        >
          {/* <Route path="/home" element={<NavBar />} /> */}
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
