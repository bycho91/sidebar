import React from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Expenses from './pages/Expenses';
import Home from './pages/Home';

const App:React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/expenses' element={<Expenses />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
