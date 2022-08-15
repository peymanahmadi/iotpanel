import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Register, Dashboard, Error } from "./pages";
import "./assets/sass/main.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
