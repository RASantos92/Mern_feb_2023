import {Link, Navigate, Route, Routes} from "react-router-dom"
import './App.css';
import Launches from "./views/Launches";
import NotFound from "./views/NotFound";
import OneLaunch from "./views/OneLaunch";


function App() {
  return (
    <div style={{width: '80%', margin: "0 auto"}}>
      <header>
        <nav>
          <Link to="/launches">Launches</Link>
        </nav>
      </header>
      <Routes>

        <Route path="/" element={<Navigate to="/launches" replace/>}></Route>
        <Route path="/launches" element={<Launches/>}></Route>


        <Route path="/launches/:id" element={<OneLaunch/>}></Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
