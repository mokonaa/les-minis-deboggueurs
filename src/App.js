import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Partie from "./components/Partie/Partie";
import Quizz from "./components/Quizz/Quizz";
import Galerie from "./components/Galerie/Galerie";
import Nav from "./components/Nav/Nav";

function App() {
  return (
      <div className="App">
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/partie" element={<Partie/>} />
                <Route path="/quizzs" element={<Quizz/>} />
                <Route path="/galerie" element={<Galerie/>} />
            </Routes>
      </div>
    );
}

export default App;
