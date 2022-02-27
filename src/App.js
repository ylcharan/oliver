import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cursor from "./components/Cursor";
import logo from "./logo.svg";
import "./styles/main.scss";
import Index from "./views";
import About from "./views/about";
import Projects from "./views/projects";

function App() {
  return (
    <BrowserRouter>
    <Cursor/>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="*" element={<Navigate replace to="/" />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
