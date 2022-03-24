// IMPORT COMPONENTS
import { Routes, Route } from "react-router-dom";
import DetailTeacher from "./Pages/DetailTeacher/DetailTeacher";
import Menu from "./components/Menu";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/detail" element={<DetailTeacher />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
