import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../pages/SignIn/SignIn";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import NotFound from "../pages/NotFound/NotFound";
export const CustomRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
