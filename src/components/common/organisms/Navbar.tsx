import { AppBar, Toolbar, Box, Switch, Menu, MenuItem, IconButton, Drawer, List, ListItem, ListItemText, Collapse } from '@mui/material';
import React, { useState } from 'react';
import { Button } from '../atoms/input/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

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
    setOpenSubMenu(prev => (prev === linkText ? null : linkText));
  };

  return (
    <>
      <AppBar position='sticky'>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              type='text'
              href='/'
              color='inherit'>
              GymRat
            </Button>
            <Box sx={{ flexDirection: 'row', ml: 2, display: { xs: 'none', sm: 'flex' } }}>
              {links.map((link) =>
                link.subMenu ? (
                  <div key={link.text}>
                    <Button
                      type='text'
                      href={link.path}
                      endIcon={currentLink === link.text ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                      color='inherit'
                      onClick={(event) => handleMenuClick(event, link.text)}>
                      {link.text}
                    </Button>
                    <Menu
                      sx={{ marginTop: '0.9em' }}
                      anchorEl={anchorEl}
                      open={currentLink === link.text}
                      onClose={handleMenuClose}
                      keepMounted>
                      {link.subMenu.map((subLink) => (
                        <MenuItem
                          key={subLink.text}
                          component='a'
                          href={subLink.path}
                          onClick={handleMenuClose}>
                          {subLink.text}
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                ) : (
                  <Button
                    key={link.text}
                    type='text'
                    href={link.path}
                    color='inherit'>
                    {link.text}
                  </Button>
                )
              )}
            </Box>
            <IconButton
              sx={{ display: { xs: 'block', sm: 'none' } }}
              color='inherit'
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Switch
            checked={darkMode}
            onChange={onThemeChange}
          />
        </Toolbar>
      </AppBar>

      <Drawer anchor='left' open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }}>
          <IconButton
            sx={{ margin: 1 }}
            color='inherit'
            onClick={toggleDrawer}
          >
            <CloseIcon />
          </IconButton>
          <List>
            {links.map((link) => (
              <React.Fragment key={link.text}>
                <ListItem button onClick={() => link.subMenu ? handleSubMenuToggle(link.text) : toggleDrawer}>
                  <ListItemText primary={link.text} />
                  {link.subMenu && (openSubMenu === link.text ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
                </ListItem>
                {link.subMenu && (
                  <Collapse in={openSubMenu === link.text} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {link.subMenu.map((subLink) => (
                        <ListItem
                          key={subLink.text}
                          button
                          component='a'
                          href={subLink.path}
                          onClick={toggleDrawer}
                        >
                          <ListItemText primary={subLink.text} sx={{ pl: 4 }} />
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
  );
};
