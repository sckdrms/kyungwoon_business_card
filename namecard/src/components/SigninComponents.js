import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../css/Login&SigninComponents.css';

const SigninComponent = () => {
  return (
    <div className='login-bg'>
      <form className="form">
        <p className="title">Register</p>
        <p className="message">경운명함을 사용하기 위하여 가입하세요.</p>
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
        <label>
          <input required placeholder="" type="password" className="input" />
          <span>전화번호</span>
        </label>
        <button className="submit">가입하기</button>
        <p className="signin">이미 계정이 있다면? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );  
};

export default SigninComponent;
