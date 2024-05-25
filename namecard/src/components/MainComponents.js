//MainComponents.js

import { Link, useNavigate } from 'react-router-dom';
import NavbarComponent from '../components/NavbarComponents';
import KYiconImage from '../img/KY-icon.png';

import '../css/MainComponents.css';

const MainComponent = () => {
  return (
    <div className='main-bg'>
      <NavbarComponent></NavbarComponent>
      <img src={KYiconImage} className='KYiconImage' alt="" />
      <p className='main-ment'>자랑스러운 경운대학교<br />명함을 만들어보세요 !</p>
    </div>
  );
};

export default MainComponent;