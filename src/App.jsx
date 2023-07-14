import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Mind from './pages/Mind/Mind';
import Body from './pages/Body/Body';


function App() {
  return (
    <>
      <NavBar />
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mindr" element={<Mind />} />
          <Route path="/body" element={<Body />} />
      </Routes>
    </>
  );
}

export default App;
