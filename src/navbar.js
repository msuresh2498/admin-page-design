import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchIcon from '@mui/icons-material/Search';
import { Badge, Button, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react';
import { Box } from '@mui/system';

const Navbarcontainer = () => {
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <Navbar className='navbar' expand="lg">
        <Container fluid>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for.."
              className="navbar-search-field"
              aria-label="Search"
            />
            <button className='nav-search-btn'><SearchIcon /></button>
          </Form>
          <div >
            <IconButton color="#FFFFFF" aria-label="add to shopping cart">
              <Badge badgeContent="3+" color="error"> <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="#FFFFFF" aria-label="add to shopping cart">
              <Badge badgeContent="7" color="error"> <EmailIcon />
              </Badge>
            </IconButton>

            <Tooltip title="Open settings">
              <button color="primary"
                onClick={handleOpenUserMenu}
                className='profile-button'>
                Douglas MCGee
                <img className='navbar-account-image'
                  src='https://png.pngtree.com/png-vector/20191103/ourmid/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg' alt='account' />
              </button>
            </Tooltip>
            <Menu
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu} >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}
export default Navbarcontainer;