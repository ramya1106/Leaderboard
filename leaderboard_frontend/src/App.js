import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import ScrollToTop from "./ScrollToTop";

import Home from './components/Home';

import StudentDetails from './components/StudentDetails'

import Swags from './components/Swags'

import Gallery from './components/Gallery'

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/studentDetails/:id' element={<StudentDetails/>} />
        <Route path='/swags' element={<Swags/>} />
        <Route path='/gallery' element={<Gallery/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
