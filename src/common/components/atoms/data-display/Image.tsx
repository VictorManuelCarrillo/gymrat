import Image, { ImageProps } from 'next/image';
import { Box } from '@mui/material';
import { SxProps, Theme } from '@mui/material';

interface ResponsiveImageProps extends Omit<ImageProps, 'width' | 'height'> {
  width?: any;
  height?: any;
  alt: string;
  sx?: SxProps<Theme>;
}

export const Img = ({ width = 'auto', height = 'auto', alt, sx, ...props }: ResponsiveImageProps) => {
  return (
    <Box sx={{ position: 'relative', width, height, ...sx }}>
      <Image {...props} alt={alt} layout='fill' objectFit='contain' />
    </Box>
  );
};
