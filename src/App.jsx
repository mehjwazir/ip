import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Inner from './pages/Inner/Inner';
import Inner from './pages/Outer/Outer';


function App() {
  return (
    <>
    <main className='App'>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Inner" element={<Inner />} />
          <Route path="/Outer" element={<Outer />} />
      </Routes>


   </main>
    </>
  );
}

export default App;
