import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext.js';

import '../css/Login&SigninComponents.css';

const LoginComponent = () => {
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // 폼 기본 제출 방지
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      const data = await response.json();
      if (data.success) {
        login(data.username);
        alert(`환영합니다 ${data.username}님`); // 사용자 ID를 알림 메시지에 포함
        navigate('/'); // 로그인 성공 후 메인 페이지로 리디렉션
      } else {
        alert('로그인 실패: ' + data.message); // 실패 시 메시지 알림
      }
    } catch (error) {
      alert('로그인 요청에 실패했습니다: ' + error.message); // 네트워크 에러 처리
    }
  };
  return (
    <div className='login-bg'>
    <form className="form" onSubmit={handleSubmit}>
      <p className="title">Log in</p>
      <p className="message">경운명함을 사용하기 위하여 로그인하세요.</p>
      <label>
        <input required type="email" className="input" name="email" value={credentials.email} onChange={handleChange} />
        <span>ID (Email)</span>
      </label>
      <label>
        <input required type="password" className="input" name="password" value={credentials.password} onChange={handleChange} />
        <span>Password</span>
      </label>

      <button type="submit" className="submit">Log in</button>
      <p className="signin">계정이 없다면? <Link to="/signin">Sign in</Link></p>
    </form>
  </div>
);  
};

export default LoginComponent;
