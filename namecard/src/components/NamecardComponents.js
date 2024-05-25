//NamecardComponents.js

import { Link, useNavigate } from 'react-router-dom';

import '../css/NamecardComponents.css';
import namecardImage from '../img/namecard-1063x591.png';

const NamecardComponent = () => {
  return (
    <div>
      <div className='namecard-bg'>
        <img src={namecardImage} className='namecard' alt="" />
        <p className='namecard-name'>name 불러오는곳</p>
        <p className='namecard-title'>title 불러오는곳</p>
        <p className='namecard-email'>email 불러오는곳</p>
        <p className='namecard-phone'>phone 불러오는곳</p>
      </div>
    </div>
  );
};

export default NamecardComponent;