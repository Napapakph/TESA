// LoginComponent.js
import React, { useState } from 'react';
import DashboardLayout from './Layout_Dashboard'; // Component ที่จะเปลี่ยนไปเมื่อเข้าสู่ระบบสำเร็จ

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // สถานะการเข้าสู่ระบบ

  const validUsername = 'admin';
  const validPassword = '1234';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === validUsername && password === validPassword) {
      setError('');
      setIsLoggedIn(true); // ตั้งค่าสถานะเป็นล็อกอินสำเร็จ
    } else {
      setError('Incorrect username or password');
    }
  };

  // ถ้าเข้าสู่ระบบสำเร็จแล้วให้แสดง DashboardLayout แทน
  if (isLoggedIn) {
    return <DashboardLayout />;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ width: '300px' }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '10px', marginBottom: '10px', width: '100%' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '10px', marginBottom: '10px', width: '100%' }}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" style={{ padding: '10px', width: '100%', backgroundColor: '#3aa9b0', color: '#fff', border: 'none', cursor: 'pointer' }}>Login</button>
      </form>
    </div>
  );
};

export default LoginComponent;
