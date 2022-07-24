import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes> 
          <Route path="/" exact element={<Home />}></Route>
      </Routes>
        </Router>
        </div>
  );
}

export default App;
