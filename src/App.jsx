import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import CreateUser from "./components/pages/CreateUser";
import Cart from "./components/pages/Cart";
import Logged from "./components/pages/Logged";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/logged" element={<Logged />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
