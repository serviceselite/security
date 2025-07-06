import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // If already logged in as admin, redirect
  if (localStorage.getItem('token') && localStorage.getItem('role') === 'admin') {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Login failed');
      }
      const data = await res.json();
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);
      setLoading(false);
      navigate('/admin');
    } catch (err) {
      setError(err.message || 'Login failed');
      setLoading(false);
    }
  };


  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' }}>
      <form onSubmit={handleSubmit} style={{ background: 'white', padding: '2.5rem 2rem', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.09)', minWidth: 320, maxWidth: 360 }}>
        <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Admin Login</h2>
        <label style={{ display: 'block', marginBottom: 12 }}>
          Username
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            autoFocus
            required
            style={{ width: '100%', marginTop: 6, padding: 8, borderRadius: 6, border: '1px solid #ccc' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: 18 }}>
          Password
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{ width: '100%', marginTop: 6, padding: 8, borderRadius: 6, border: '1px solid #ccc' }}
          />
        </label>
        {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
        <button type="submit" disabled={loading} style={{ width: '100%', padding: '10px 0', borderRadius: 6, background: '#2289f8', color: 'white', fontWeight: 600, border: 'none', fontSize: 16, marginBottom: 8 }}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}
