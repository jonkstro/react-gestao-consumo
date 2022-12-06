import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Logar from "./pages/Logar";
import Plataforma from "./pages/Plataforma/[...index]";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="logar" element={<Logar />} />
          <Route path="plataforma/:id" element = {<Plataforma />} />
      </Routes>
    </BrowserRouter>
  );
}
