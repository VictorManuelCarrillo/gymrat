'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import {
  AppBar,
  Toolbar,
  Box,
  Switch,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Button } from '../atoms/input/Button';
import { Text } from '../atoms/data-display/Text';

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

export const Navbar: React.FC<NavbarProps> = ({ darkMode, onThemeChange }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentLink, setCurrentLink] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, linkText: string) => {
    setAnchorEl(event.currentTarget);
    setCurrentLink(linkText);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentLink(null);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleSubMenuToggle = (linkText: string) => {
    setOpenSubMenu((prev) => (prev === linkText ? null : linkText));
  };

  const renderDesktopMenu = () => (
    <Box sx={{ flexDirection: 'row', ml: 2, display: { xs: 'none', sm: 'flex' } }}>
      {links.map((link) =>
        link.subMenu ? (
          <div key={link.text}>
            <Button
              type='text'
              href={link.path}
              endIcon={currentLink === link.text ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              color='inherit'
              onClick={(event) => handleMenuClick(event, link.text)}
            >
              {link.text}
            </Button>
            <Menu sx={{ marginTop: '0.9em' }} anchorEl={anchorEl} open={currentLink === link.text} onClose={handleMenuClose} keepMounted>
              {link.subMenu.map((subLink) => (
                <MenuItem key={subLink.text} component='a' href={subLink.path} onClick={handleMenuClose}>
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
      )}
    </Box>
  );

  const renderMobileMenu = () => (
    <Drawer anchor='left' open={drawerOpen} onClose={toggleDrawer}>
      <Box sx={{ width: 250 }}>
        <IconButton sx={{ margin: 1 }} color='inherit' onClick={toggleDrawer}>
          <CloseIcon />
        </IconButton>
        <List>
          {links.map((link) => (
            <React.Fragment key={link.text}>
              <ListItem disablePadding>
                <ListItemButton onClick={() => (link.subMenu ? handleSubMenuToggle(link.text) : toggleDrawer())}>
                  <ListItemText primary={link.text} />
                  {link.subMenu && (openSubMenu === link.text ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
                </ListItemButton>
              </ListItem>
              {link.subMenu && (
                <Collapse in={openSubMenu === link.text} timeout='auto' unmountOnExit>
                  <List component='div' disablePadding>
                    {link.subMenu.map((subLink) => (
                      <ListItem key={subLink.text} disablePadding>
                        <ListItemButton component='a' href={subLink.path} onClick={toggleDrawer}>
                          <ListItemText primary={subLink.text} sx={{ pl: 4 }} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Drawer>
  );

  return (
    <>
      <AppBar position='sticky'>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Image src='/assets/logo/logo1.png' alt='GymRat Logo' width={40} height={40} />
            <Text type='h6' style={{ fontWeight: 'bold', marginLeft: '1em' }}>
              GymRat
            </Text>
            {renderDesktopMenu()}
          </Box>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              '& > *': {
                mx: '0.5em',
              },
            }}
          >
            <IconButton sx={{ display: { xs: 'flex', sm: 'none' } }} color='inherit' onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
              <Switch checked={darkMode} onChange={onThemeChange} sx={{ ml: 1 }} />
            </Box>
            <Box sx={{ display: 'block' }}>
              <Button type='contained' color='secondary'>
                Iniciar sesión
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu()}
    </>
  );
};
