'use client';
import { ExpandLess, ExpandMore, Close, Menu as MenuIcon } from '@mui/icons-material';
import {
  AppBar,
  Toolbar,
  Box,
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
import styles from '~/styles/components/organisms/Nabvar.module.scss';
import React, { useState } from 'react';

import { Button } from '../atoms/inputs/Button';

interface SubMenuItem {
  text: string;
  path: string;
}

interface NavLink {
  text: string;
  path: string;
  subMenu?: SubMenuItem[];
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
  {
    text: 'Primobolan',
    path: '/',
    subMenu: [
      { text: 'Sub-item 1', path: '/subitem1' },
      { text: 'Sub-item 2', path: '/subitem2' },
    ],
  },
  {
    text: 'shit',
    path: '/',
    subMenu: [
      { text: 'Sub-item 1', path: '/subitem1' },
      { text: 'Sub-item 2', path: '/subitem2' },
    ],
  },
];

const DesktopMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentLink, setCurrentLink] = useState<string | null>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, linkText: string) => {
    event.preventDefault(); // Evitar la redirección
    setAnchorEl(event.currentTarget);
    setCurrentLink(linkText);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentLink(null);
  };

  return (
    <Box className={styles['desktop_menu']}>
      {links.map((link) => (
        <React.Fragment key={link.text}>
          <Button
            className={styles['desktop_menu__button']}
            variant="text"
            {...(!link.subMenu && { href: link.path })} // Solo enlaces sin submenu tienen href
            endIcon={link.subMenu ? currentLink === link.text ? <ExpandLess /> : <ExpandMore /> : null}
            onClick={(event) => link.subMenu && handleMenuClick(event, link.text)}
          >
            {link.text}
          </Button>
          {link.subMenu && (
            <Menu
              className={styles['desktop_menu__menu']}
              anchorEl={anchorEl}
              open={currentLink === link.text}
              onClose={handleMenuClose}
              keepMounted
            >
              {link.subMenu.map((subLink) => (
                <MenuItem key={subLink.text} component="a" href={subLink.path} onClick={handleMenuClose}>
                  {subLink.text}
                </MenuItem>
              ))}
            </Menu>
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

const MobileMenu: React.FC<{ drawerOpen: boolean; toggleDrawer: () => void }> = ({ drawerOpen, toggleDrawer }) => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleSubMenuToggle = (linkText: string) => {
    setOpenSubMenu((prev) => (prev === linkText ? null : linkText));
  };

  return (
    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
      <Box className={styles['mobile_menu__drawer_screen']}>
        <IconButton sx={{ margin: 1 }} color="inherit" onClick={toggleDrawer}>
          <Close />
        </IconButton>
        <List>
          {links.map((link) => (
            <React.Fragment key={link.text}>
              <ListItem disablePadding>
                <ListItemButton onClick={() => (link.subMenu ? handleSubMenuToggle(link.text) : toggleDrawer())}>
                  <ListItemText primary={link.text} />
                  {link.subMenu && (openSubMenu === link.text ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
              </ListItem>
              {link.subMenu && (
                <Collapse in={openSubMenu === link.text} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {link.subMenu.map((subLink) => (
                      <ListItem key={subLink.text} disablePadding>
                        <ListItemButton component="a" href={subLink.path} onClick={toggleDrawer}>
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
};

export const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={styles['navbar__toolbar']}>
          <Box>
            <DesktopMenu />
          </Box>
          <Box>
            <Button variant="contained" color="secondary">
              Iniciar sesión
            </Button>
          </Box>
        </Toolbar>
        <MobileMenu drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      </AppBar>
      <IconButton className={styles['navbar__toggle_menu_button']} color="inherit" onClick={toggleDrawer}>
        <MenuIcon color="action" />
      </IconButton>
    </>
  );
};
