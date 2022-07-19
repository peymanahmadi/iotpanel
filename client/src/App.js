import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./pages";
import "./assets/sass/main.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
