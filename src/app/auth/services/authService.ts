// import apiClient from '@/lib/axios'; // Cliente global de Axios
// import { LoginPayload, User } from '../types/authTypes'; // Tipos específicos de este módulo

// /**
//  * Realiza la autenticación del usuario con las credenciales proporcionadas.
//  * @param payload - Objeto con las credenciales (correo y contraseña).
//  * @returns Información del usuario autenticado.
//  */
// export const login = async (payload: LoginPayload): Promise<User> => {
//   const { data } = await apiClient.post('/auth/login', payload);
//   return data;
// };

// /**
//  * Obtiene la información del usuario actual a partir de su token.
//  * @returns Información del usuario autenticado.
//  */
// export const getCurrentUser = async (): Promise<User> => {
//   const { data } = await apiClient.get('/auth/me');
//   return data;
// };

// /**
//  * Cierra la sesión del usuario.
//  */
// export const logout = async (): Promise<void> => {
//   await apiClient.post('/auth/logout');
// };
