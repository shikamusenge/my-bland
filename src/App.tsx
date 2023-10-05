import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Nav from "./Components/Nav.tsx";
function App() {
  return (
    <>
      <Nav />
      <div className="min-h-screen overflow-x-hidden bg-gradient-to-br to-[#01233f] from-[#014A64] ease-in duration-1000 transition-transform">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
