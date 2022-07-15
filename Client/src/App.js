import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './Search';
import Browse from './Browse';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/search" element={<Search/>} />
            <Route path="/browse" element={<Browse/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;