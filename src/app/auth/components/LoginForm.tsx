'use client';

import { useLogin } from '../hooks/useLogin';

export default function LoginForm() {
  const { handleLogin, error } = useLogin();

  return (
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="Correo" />
      <input type="password" placeholder="Contraseña" />
      <button type="submit">Entrar</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}
