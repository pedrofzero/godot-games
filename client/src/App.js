import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddGame from './pages/AddGame';
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/addgame" element={ <AddGame /> } />
        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
    </Router>

  );
}

export default App;

