import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddGame from './pages/AddGame';
import ErrorPage from './pages/ErrorPage'
import GamePage from './pages/GamePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/games/:id" element={ <GamePage /> } />
        <Route path="/addgame" element={ <AddGame /> } />
        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
    </Router>

  );
}

export default App;

