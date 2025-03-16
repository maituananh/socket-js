import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import DashBoard from "./pages/dashboard/DashBoard";
import Contact from "./pages/contact/Contact";
import { Navigation } from "./pages/navigation/Navigation";

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
