'use client';

import { useState } from 'react';

export function useLogin() {
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // Lógica para autenticación
      console.log('Iniciando sesión...');
    } catch (e) {
      setError('Error');
      console.log(e);
    }
  };

  return { handleLogin, error };
}
