import React, { useEffect } from 'react';
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient';
import * as reactSpring from '@react-spring/three';
import * as drei from '@react-three/drei';
import * as fiber from '@react-three/fiber';
import NavbarComponent from '../components/NavbarComponents';
import KYiconImage from '../img/KY-icon.png';

import '../css/MainComponents.css';

const MainComponent = () => {
  useEffect(() => {
    // Disable scroll
    const disableScroll = (e) => {
      e.preventDefault();
    };
    
    window.addEventListener('scroll', disableScroll, { passive: false });
    window.addEventListener('wheel', disableScroll, { passive: false });
    window.addEventListener('touchmove', disableScroll, { passive: false });

    // Clean up the event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', disableScroll);
      window.removeEventListener('wheel', disableScroll);
      window.removeEventListener('touchmove', disableScroll);
    };
  }, []);

  return (
    <div className='main-bg' style={{ overflow: 'hidden' }}>
      <ShaderGradientCanvas
        importedFiber={{ ...fiber, ...drei, ...reactSpring }}
        style={{
          position: 'absolute',
          top: 0,
        }}
      >
        <ShaderGradient
          control='query'
          urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=4.5&cAzimuthAngle=180&cDistance=2.9&cPolarAngle=120&cameraZoom=1&color1=%23ebedff&color2=%233bffff&color3=%23dbffff&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=1.8&positionZ=1&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=-90&shader=defaults&type=waterPlane&uDensity=1.2&uFrequency=1.5&uSpeed=0.3&uStrength=3&uTime=0.2&wireframe=false&zoomOut=false'
        />
      </ShaderGradientCanvas>
      <NavbarComponent />
      <img src={KYiconImage} className='KYiconImage' alt="" />
      <p className='main-ment'>자랑스러운 경운대학교<br />명함을 만들어보세요 !</p>
    </div>
  );
};

export default MainComponent;
