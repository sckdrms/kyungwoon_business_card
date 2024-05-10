import NavbarComponent from './components/NavbarComponents'
import SigninComponent from './components/SigninComponents'
import LoginComponent from './components/LoginComponents'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <NavbarComponent/> }></Route>

        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signin" element={<SigninComponent />} />

        {/* <Route path='*' element={<P404></P404>} /> */}
      </Routes>
      
    </div>
  );
}

export default App;
