// App.js

import MainComponent from './components/MainComponents';
import SigninComponent from './components/SigninComponents';
import LoginComponent from './components/LoginComponents';
import InformationComponent from './components/InformationComponents.js';
import NamecardComponent from './components/NamecardComponents.js';
import PrivateRoute from './PrivateRoute.js';

import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext.js';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path='/' element={ <MainComponent/> }></Route>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signin" element={<SigninComponent />} />
          <Route path="/Information" element={<InformationComponent />} />
          <Route path="/namecard" element={<PrivateRoute element={NamecardComponent} />} />

          {/* <Route path='*' element={<P404></P404>} /> */}
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
