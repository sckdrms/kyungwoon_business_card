// NamecardComponents.js
import React from 'react';
import { useAuth } from './AuthContext.js';
import html2canvas from 'html2canvas';
import '../css/NamecardComponents.css';
import namecardImage from '../img/namecard-1063x591.png';

const NamecardComponent = () => {
  const { auth } = useAuth();

  const handleDownload = async () => {
    const element = document.querySelector('.namecard-bg');
    const canvas = await html2canvas(element, {
      x: 10,
      y: 10,
      width: 1063,
      height: 591,
      scrollX: 0,
      scrollY: 0,
      windowWidth: document.documentElement.clientWidth,
      windowHeight: document.documentElement.clientHeight,
    });
    const dataURL = canvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.href = dataURL;
    link.download = `KYNC_${auth.username}_${auth.usertitle}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className='namecard-bg'>
        <img src={namecardImage} className='namecard' alt="" />
        {auth.isLoggedIn && (
          <>
            <p className='namecard-name'>{auth.username}</p>
            <p className='namecard-title'>{auth.usertitle}</p>
            <p className='namecard-email'>{auth.useremail}</p>
            <p className='namecard-phone'>{auth.userphone}</p>
          </>
        )}
      </div>
      {auth.isLoggedIn && (
        <button onClick={handleDownload} className='download-button'>이미지 다운로드</button>
      )}
    </div>
  );
};

export default NamecardComponent;
