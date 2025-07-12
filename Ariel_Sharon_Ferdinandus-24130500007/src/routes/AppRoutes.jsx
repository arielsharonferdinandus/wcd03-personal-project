import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Contact from '../pages/contact';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
