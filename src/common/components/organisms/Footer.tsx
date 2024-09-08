import React from 'react';
import { Box, Typography, Link, IconButton, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer: React.FC = () => {
  return (
    <Box
      component='footer'
      sx={{
        py: 4,
        px: 2,
        bgcolor: 'primary.main',
        color: 'text.secondary',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant='body1' gutterBottom>
        © 2024 GymRat. Todos los derechos reservados.
      </Typography>
      <Divider sx={{ my: 2, width: '100%' }} />
      <Box sx={{ display: 'flex', gap: 2 }}>
        <IconButton component={Link} href='https://github.com/yourusername' target='_blank' aria-label='GitHub'>
          <GitHubIcon />
        </IconButton>
        <IconButton component={Link} href='https://linkedin.com/in/yourusername' target='_blank' aria-label='LinkedIn'>
          <LinkedInIcon />
        </IconButton>
        <IconButton component={Link} href='https://twitter.com/yourusername' target='_blank' aria-label='Twitter'>
          <TwitterIcon />
        </IconButton>
        <IconButton component={Link} href='https://facebook.com/yourusername' target='_blank' aria-label='Facebook'>
          <FacebookIcon />
        </IconButton>
        <IconButton component={Link} href='https://instagram.com/yourusername' target='_blank' aria-label='Instagram'>
          <InstagramIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
