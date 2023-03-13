import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Inner from './pages/Inner/Inner';
import Outer from './pages/Outer/Outer';
import Nature from './pages/Nature/Nature';
import Quotes from './pages/Quotes/Quotes';


function App() {
  return (
    <>
    <main className='App'>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Inner" element={<Inner />} />
          <Route path="/Outer" element={<Outer />} />
          <Route path="/Nature" element={<Nature />} />
          <Route path="/Quotes" element={<Quotes />} />
      </Routes>


   </main>
    </>
  );
}

export default App;
