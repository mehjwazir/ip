import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Journal from './pages/Journal/Journal';
import Inner from './pages/Inner/Inner';
import Outer from './pages/Outer/Outer';
import Nature from './pages/Nature/Nature';
import Quotes from './pages/Quotes/Quotes';
import Water from './pages/Nature/Water/Water';


function App() {
  return (
    <>
    <main className='App'>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Journal" element={<Journal />} />
          <Route path="/Inner" element={<Inner />} />
          <Route path="/Outer" element={<Outer />} />
          <Route path="/Nature" element={<Nature />} />
          <Route path="/Quotes" element={<Quotes />} />
          <Route path="/Water" element={<Water />} />
        </Routes>
        <Footer />


   </main>
    </>
  );
}

export default App;
