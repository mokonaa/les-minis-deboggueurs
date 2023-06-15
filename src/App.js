import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Partie from "./components/Partie/Partie";

function App() {
  return (
      <div className="App">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/partie" element={<Partie/>} />
            </Routes>
      </div>
    );
}

export default App;
