import { useState, MouseEvent } from 'react';
import Icon from '@/Components/Icon';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Link } from '@inertiajs/react';

interface RouteInfo {
  name: string,
  route: string,
  post?: boolean
}

interface Props {
  routes?: RouteInfo[]
}

export default function NavBar({ routes }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (<>
    <AppBar>
      <Toolbar variant="dense" className="flex items-center justify-center">
        <Container className="max-w-screen-xl mx-auto flex">
          <Button href='/'variant="text" color='secondary'>
            <Icon size={40}/>
            <Typography variant="h6" color="white" className="ml-2" component="div">
              ADVOCAID
            </Typography>
          </Button>
          <nav className="my-auto flex flex-1 justify-end hidden sm:flex">
            {routes && routes.map((routeInfo) => (
              <Link
                  href={route(routeInfo.route)}
                  {...(routeInfo.post && { method: "post" })}
                  className="ml-6 no-underline text-white hover:text-blue-100 hover:underline"
              >
                {routeInfo.name}
              </Link>
            ))}
          </nav>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Container>
      </Toolbar>
    </AppBar>
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id="menu"
      MenuListProps={{
        'aria-labelledby': 'menu-button',
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose} disableRipple>
        <ListItemIcon />
        Edit
      </MenuItem>
      <MenuItem onClick={handleClose} disableRipple>
        <Logout />
        Duplicate
      </MenuItem>
      <Divider sx={{ my: 0.5 }} />
      <MenuItem onClick={handleClose} disableRipple>
        <Settings />
        Archive
      </MenuItem>
      <MenuItem onClick={handleClose} disableRipple>
        <PersonAdd />
        More
      </MenuItem>
    </Menu>
    <div className='mb-20'/>
  </>);
}
