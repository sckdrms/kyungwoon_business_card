import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../css/Login&SigninComponents.css';

const LoginComponent = () => {
  return (
    <div className='login-bg'>
      <form className="form">
        <p className="title">Log in</p>
        <p className="message">경운명함을 사용하기 위하여 로그인하세요.</p>
        <div className="flex">
          <label>
            <input required placeholder="" type="text" className="input" />
            <span>이름</span>
          </label>
          <label>
            <input required placeholder="" type="text" className="input" />
            <span>학번/교번</span>
          </label>
        </div>  
        <label>
          <input required placeholder="" type="email" className="input" />
          <span>ID (Email)</span>
        </label> 
        <label>
          <input required placeholder="" type="password" className="input" />
          <span>Password</span>
        </label>

        <button className="submit">Log in</button>
        <p className="signin">계정이 없다면? <Link to="/Signin">Sign in</Link></p>
      </form>
    </div>
  );  
};

export default LoginComponent;
