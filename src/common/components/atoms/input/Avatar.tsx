import { Avatar as MuiAvatar } from '@mui/material';
import React from 'react';

interface AvatarProps {
  alt?: string;
  src?: string;
  type?: 'circular' | 'rounded' | 'square';
  children?: React.ReactNode;
}

// Función para convertir un string en un color
function stringToColor(string: string) {
  let hash = 0;
  for (let i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';
  for (let i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}

// Función para calcular la luminancia de un color hexadecimal
function isDarkColor(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  // Fórmula para calcular la luminancia
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

  return luminance < 128; // Si es menor a 128, consideramos que es un color oscuro
}

// Función para generar las props del avatar (color de fondo y texto)
function stringAvatar(name: string) {
  const color = stringToColor(name);
  const textColor = isDarkColor(color) ? '#fff' : '#000'; // Blanco para fondo oscuro, negro para fondo claro

  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('');

  return {
    sx: {
      bgcolor: color,
      color: textColor, // Establecemos el color del texto basado en el fondo
    },
    children: initials,
  };
}

export const Avatar: React.FC<AvatarProps> = ({ alt = 'User', src, type = 'circular', children }) => {
  // Si existe `src`, renderiza el avatar con la imagen
  if (src) {
    return (
      <MuiAvatar alt={alt} src={src} variant={type}>
        {children}
      </MuiAvatar>
    );
  }

  // Si no hay `src`, verificamos si hay `children`, de lo contrario generamos las iniciales
  const avatarProps = stringAvatar(alt);

  return (
    <MuiAvatar variant={type} sx={avatarProps.sx}>
      {children || avatarProps.children} {/* Usamos `children` si está presente, si no, las iniciales */}
    </MuiAvatar>
  );
};

// //uso
// Avatar alt="John Doe" />  {/* Generará las iniciales "JD" */}
// <Avatar alt="John Doe" src="/profile.jpg" />  {/* Mostrará la imagen */}
// <Avatar alt="John Doe">😊</Avatar>  {/* Mostrará el emoji 😊 como contenido */}
