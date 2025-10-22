import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import ScrollToTop from "./ScrollToTop";

import Home from './components/Home';

import StudentDetails from './components/StudentDetails'

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/studentDetails/:id' element={<StudentDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
