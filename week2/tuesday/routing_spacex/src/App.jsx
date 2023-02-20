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
        {/* The navigate tag is used here to redirect from the index route to the main route */}
        <Route path="/" element={<Navigate to="/launches" replace/>}></Route>
        <Route path="/launches" element={<Launches/>}></Route>

        {/* OneLaunch route */}
        <Route path="/launches/:id" element={<OneLaunch/>}></Route>

        {/* this will handle all other routes that are not accounted for */}
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
