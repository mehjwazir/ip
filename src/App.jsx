import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Inner from './pages/Inner/Inner';


function App() {
  return (
    <>
    <main className='App'>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Inner" element={<Inner />} />
      </Routes>


   </main>
    </>
  );
}

export default App;
