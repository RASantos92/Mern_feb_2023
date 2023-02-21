import './App.css';
import {Link, Routes, Route, Navigate} from "react-router-dom"
import AllSongs from './views/AllSongs';
import EditSong from './views/EditSong';
import OneSong from './views/OneSong';
import NewSong from './views/NewSong';
import NotFound from './views/NotFound';
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <h1 className="navbar-brand mb-0">Lookify</h1>
        <div className="navbar-nav justify-content-between">
          <Link
            to="/songs"
            className="btn btn-sm btn-outline-primary mx-1"
          >
            All Songs
          </Link>
          <Link
            to="/songs/new"
            className="btn btn-sm btn-outline-info mx-1"
          >
            New Song
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Navigate to="/songs" replace/>}/>
        <Route path="/songs" element={<AllSongs/>}/>
        <Route path="/songs/:id/edit" element={<EditSong/>}/>
        <Route path="/songs/:id" element={<OneSong/>}/>
        <Route path="/songs/new" element={<NewSong/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
