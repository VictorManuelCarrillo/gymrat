// components/Navbar.tsx

import { AppBar, Toolbar, Box, Switch, Menu, MenuItem, Button as MuiButton, IconButton } from '@mui/material';
import { useState } from 'react';
import { Text } from '../atoms/data-display/Text';
import { Button } from '../atoms/input/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Importa el ícono para la flecha hacia abajo
import ExpandLessIcon from '@mui/icons-material/ExpandLess'; // Importa el ícono para la flecha hacia arriba

interface SubMenuItem {
  text: string;
  path: string;
}

interface NavLink {
  text: string;
  path: string;
  subMenu?: SubMenuItem[];
}

interface NavbarProps {
  darkMode: boolean;
  onThemeChange: () => void;
}

const links: NavLink[] = [
  { text: 'home', path: '/' },
  { text: 'nosotros', path: '/' },
  {
    text: 'trembo',
    path: '/',
    subMenu: [
      { text: 'Sub-item 1', path: '/subitem1' },
      { text: 'Sub-item 2', path: '/subitem2' },
    ],
  },
  {
    text: 'Dianabol',
    path: '/',
    subMenu: [
      { text: 'Sub-item 1', path: '/subitem1' },
      { text: 'Sub-item 2', path: '/subitem2' },
    ],
  },
];

export const Navbar = ({ darkMode, onThemeChange }: NavbarProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentLink, setCurrentLink] = useState<string | null>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, linkText: string) => {
    setAnchorEl(event.currentTarget);
    setCurrentLink(linkText);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentLink(null);
  };

  return (
    <AppBar position='sticky'>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Text type='h6'>GymRat</Text>

          <Box sx={{ display: 'flex', flexDirection: 'row', ml: 2 }}>
            {links.map(link => (
              link.subMenu ? (
                <div key={link.text}>
                  <IconButton
                    onClick={(event) => handleMenuClick(event, link.text)}
                    color='inherit'
                    sx={{ display: 'flex', alignItems: 'center', mx: 1 }}
                  >
                    <Text>{link.text}</Text>
                    {currentLink === link.text ? (
                      <ExpandLessIcon sx={{ ml: 1 }} />
                    ) : (
                      <ExpandMoreIcon sx={{ ml: 1 }} />
                    )}
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={currentLink === link.text}
                    onClose={handleMenuClose}
                    keepMounted
                  >
                    {link.subMenu.map(subLink => (
                      <MenuItem
                        key={subLink.text}
                        component='a'
                        href={subLink.path}
                        onClick={handleMenuClose}
                      >
                        {subLink.text}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              ) : (
                <Button key={link.text} type='text' href={link.path} color='inherit'>
                  {link.text}
                </Button>
              )
            ))}
          </Box>
        </Box>
        <Switch checked={darkMode} onChange={onThemeChange} />
      </Toolbar>
    </AppBar>
  );
};
