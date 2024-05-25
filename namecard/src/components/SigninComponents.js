// SigninComponents.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

import '../css/Login&SigninComponents.css';

const SigninComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
    password: '',
    phone: ''
  });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm(formData)) {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        alert(data.message);
        login(formData.name, formData.title, formData.email, formData.phone);
        navigate('/login');
      } else {
        alert('회원가입 실패: ' + data.message);
      }
    } else {
      alert('모든 필드를 입력해 주세요.');
    }
  };

  const validateForm = (data) => {
    return data.name && data.title && data.email && data.password && data.phone;
  };

  return (
    <div className='login-bg'>
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Register</p>
        <p className="message">경운명함을 사용하기 위하여 가입하세요.</p>
        <div className="flex">
          <label>
            <input required name="name" value={formData.name} onChange={handleChange} placeholder="" type="text" className="input" />
            <span>이름</span>
          </label>
          <label>
            <input required name="title" value={formData.title} onChange={handleChange} placeholder="" type="text" className="input" />
            <span>직함</span>
          </label>
        </div>  
        <label>
          <input required name="email" value={formData.email} onChange={handleChange} placeholder="" type="email" className="input" />
          <span>ID (Email)</span>
        </label> 
        <label>
          <input required name="password" value={formData.password} onChange={handleChange} placeholder="" type="password" className="input" />
          <span>Password</span>
        </label>
        <label>
          <input required name="phone" value={formData.phone} onChange={handleChange} placeholder="" type="text" className="input" />
          <span>전화번호</span>
        </label>
        <button type="submit" className="submit">가입하기</button>
        <p className="signin">이미 계정이 있다면? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );  
};

export default SigninComponent;
