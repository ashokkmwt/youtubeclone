import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Watch from './pages/Watch';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* remember it ---- cause we have to send only id, so we use (/:) for sending id. */}
        <Route path="watch/:id" element={<Watch />} />        
      </Routes>
    </div>
  );
}

export default App;
