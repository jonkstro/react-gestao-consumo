import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Logar from "./pages/Logar";




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="logar" element={<Logar />} />
      </Routes>
    </BrowserRouter>
  );
}
