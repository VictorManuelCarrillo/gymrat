'use client';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  Box,
  useTheme,
  useMediaQuery,
  Collapse,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  ListItemButton,
} from '@mui/material';
import React, { useState } from 'react';

// 🌐 Tipo para los ítems de navegación
type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

// 🔧 Configuración de la navegación (editable)
const navItems: NavItem[] = [
  { label: 'Inicio', href: '/' },
  {
    label: 'Servicios',
    children: [
      { label: 'Desarrollo Web', href: '/servicios/web' },
      { label: 'Apps Móviles', href: '/servicios/movil' },
    ],
  },
  {
    label: 'Proyectos',
    children: [
      { label: 'Open Source', href: '/proyectos/open-source' },
      { label: 'Clientes', href: '/proyectos/clientes' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
];

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openCollapse, setOpenCollapse] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  /* ---------- helpers ---------- */
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const toggleCollapse = (label: string) => setOpenCollapse((prev) => (prev === label ? null : label));

  const handleMenuOpen = (e: React.MouseEvent<HTMLButtonElement>, label: string) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(label);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  const handleNavClick = (href?: string) => {
    if (href) window.location.href = href; // cámbialo por router.push() en Next.js si quieres
  };

  /* ---------- render ---------- */
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Mi App
          </Typography>

          {isMobile ? (
            /* ----------- Drawer (mobile) ----------- */
            <>
              <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>

              <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                <Box sx={{ width: 250, p: 2 }}>
                  <List>
                    {navItems.map((item) => (
                      <React.Fragment key={item.label}>
                        <ListItem disablePadding>
                          <ListItemButton onClick={() => (item.children ? toggleCollapse(item.label) : handleNavClick(item.href))}>
                            <ListItemText primary={item.label} />
                            {item.children && (openCollapse === item.label ? <ExpandLess /> : <ExpandMore />)}
                          </ListItemButton>
                        </ListItem>

                        {item.children && (
                          <Collapse in={openCollapse === item.label} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                              {item.children.map((sub) => (
                                <ListItem disablePadding key={sub.label}>
                                  <ListItemButton sx={{ pl: 4 }} onClick={() => handleNavClick(sub.href)}>
                                    <ListItemText primary={sub.label} />
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
            </>
          ) : (
            /* ----------- Desktop ----------- */
            <>
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <Button
                      color="inherit"
                      onClick={(e) => handleMenuOpen(e, item.label)}
                      sx={{ textTransform: 'none', display: 'flex', gap: 0.5 }}
                    >
                      {item.label}
                      {openMenu === item.label ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
                    </Button>

                    <Menu
                      anchorEl={anchorEl}
                      open={openMenu === item.label}
                      onClose={handleMenuClose}
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    >
                      {item.children.map((sub) => (
                        <MenuItem key={sub.label} onClick={() => handleNavClick(sub.href)}>
                          {sub.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                ) : (
                  <Button key={item.label} color="inherit" onClick={() => handleNavClick(item.href)}>
                    {item.label}
                  </Button>
                )
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
