import { useState, MouseEvent } from 'react';
import Icon from '@/Components/Icon';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';
import Settings from '@mui/icons-material/Settings';
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import PersonAddSharpIcon from '@mui/icons-material/PersonAddSharp';
import { Link } from '@inertiajs/react';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';

interface RouteInfo {
  name: string,
  route: string,
  post?: boolean
}

interface Props {
  routes?: RouteInfo[]
}

interface IconMap {
  [key: string]: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  }
}

const RouteIcons: IconMap = {
  Default: Settings,
  Register: PersonAddSharpIcon,
  Login: LoginSharpIcon,
  Logout: LogoutSharpIcon,
  Dashboard: DashboardSharpIcon,
  Profile: AccountBoxSharpIcon
}

const LinkIcon = ({ name }: {name: string}) => {
  const Icon = RouteIcons[name] || RouteIcons.Default;
  return <Icon />;
};

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
                  key={routeInfo.name + "-Link"}
                  href={route(routeInfo.route)}
                  {...(routeInfo.post && { method: "post" })}
                  {...(routeInfo.post && { as: "button" })}
                  className="font-sans m-0 p-0 ml-6 no-underline text-white hover:text-blue-100 hover:underline appearance-none border-none bg-transparent text-base"
              >
                {routeInfo.name}
              </Link>
            ))}
          </nav>
          <IconButton
            className="ml-auto sm:hidden"
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <MenuSharpIcon className='text-white w-12 h-12'/>
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
       {routes && routes.map((routeInfo) => (
        <MenuItem key={routeInfo.name + "-MenuItem"} disableRipple>
          <LinkIcon name={routeInfo.name}/>
          <Link
              href={route(routeInfo.route)}
              {...(routeInfo.post && { method: "post" })}
              {...(routeInfo.post && { as: "button" })}
              className="font-sans m-0 p-0 ml-6 no-underline text-black hover:text-blue-900 hover:underline appearance-none border-none bg-transparent text-base"
          >
            {routeInfo.name}
          </Link>
        </MenuItem>
      ))}
    </Menu>
    <div className='mb-20'/>
  </>);
}
