import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/cliente/Home';
import Admin from './pages/admin/admin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;