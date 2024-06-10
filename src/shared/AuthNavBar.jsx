import { useState } from 'react';
import { NavLink, Link as RouterLink } from 'react-router-dom';
import { CalendarMonth } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';

export const AuthNavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link
              component={RouterLink}
              to="/"
              sx={{
                cursor: 'pointer',
                color: 'secondary.main',
                mr: 1,
              }}
            >
              <CalendarMonth />
            </Link>
            <Typography
              sx={{
                fontFamily: 'monospace',
                letterSpacing: '0.1rem',
                fontWeight: '700',
                flexGrow: 1,
              }}
            >
              Journal App
            </Typography>

            <Tooltip title="Account settings">
              <IconButton
                sx={{ padding: 0 }}
                size="large"
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <Avatar alt="Diego Rodriguez" src="#" />
              </IconButton>
            </Tooltip>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem component={NavLink} to="/auth/profile" divider="true">
                Profile
              </MenuItem>

              <MenuItem>LogOuth</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
