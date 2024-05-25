// App.js

import MainComponent from './components/MainComponents';
import NavbarComponent from './components/NavbarComponents';
import SigninComponent from './components/SigninComponents';
import LoginComponent from './components/LoginComponents';
import InfomationComponent from './components/InfomationComponents.js';
import NamecardComponent from './components/NamecardComponents.js';

import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path='/main' element={ <MainComponent/> }></Route>
          <Route path='/' element={ <NavbarComponent/> }></Route>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signin" element={<SigninComponent />} />
          <Route path="/Infomation" element={<InfomationComponent />} />
          <Route path="/namecard" element={<NamecardComponent />} />

          {/* <Route path='*' element={<P404></P404>} /> */}
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
