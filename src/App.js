import logo from './logo.svg';
import NavBar from './components/NavBar.js'; 
import HomePage from './pages/home/HomePage.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
