import React, { useEffect, useState } from 'react';
import ProtectedRoute from './ProtectedRoute';
import Admin from '../pages/Admin';

// This wrapper ensures localStorage checks only run on client, avoiding SSR/hydration errors
export default function AdminProtectedRoute() {
  const [checked, setChecked] = useState(false);
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    // Only run on client
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    setIsAllowed(Boolean(token) && role === 'admin');
    setChecked(true);
  }, []);

  if (!checked) return null; // Prevents SSR/hydration mismatch
  return (
    <ProtectedRoute isAllowed={isAllowed} redirectPath="/admin-login">
      <Admin />
    </ProtectedRoute>
  );
}
