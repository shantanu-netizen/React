import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import HTML from "./pages/HTML.jsx";
import JavaScript from "./pages/JavaScript.jsx";
import  MyContext  from "./store/mycontext.js";

export default function App() {
  const user = "Ameen";
  const phone = "9159098909";

  return (
    <div>
      <MyContext.Provider value={{ user, phone }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/html" element={<HTML />} />
          <Route path="/js" element={<JavaScript />} />
        </Routes>
      </MyContext.Provider>
    </div>
  );
}
