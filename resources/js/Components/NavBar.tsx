import { useState, MouseEvent, MouseEventHandler } from 'react';
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
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';
import Settings from '@mui/icons-material/Settings';
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import PersonAddSharpIcon from '@mui/icons-material/PersonAddSharp';
import { Link } from '@inertiajs/react';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import Slide from '@mui/material/Slide';
import { useAlertContext } from '@/Contexts/AlertContext';
import { useRouteContext } from '@/Contexts/RouteContext';

interface Props {
  routes?: RouteInfo[]
  sideroutes?: SideRouteInfo[]
  sidebar?: boolean
  user?: inertia.User
}

interface RouteInfo {
  name: string,
  route: string,
  post?: boolean
}

interface SideRouteInfo {
  name: string,
  route: string,
}


interface IconMap {
  [key: string]: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  }
}

interface DrawerProps {
  toggleDrawer: (open: boolean) => MouseEventHandler<HTMLDivElement>
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

export default function NavBar({ routes, sidebar, user }: Props) {
  const { getRoutes } = useRouteContext();
  const { alerts, removeAlert } = useAlertContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openSide, setOpenSide] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenSide(false);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const toggleDrawer = (newOpenSide: boolean) => () => {
    setOpenSide(newOpenSide);
  };
  const DrawerList = ({toggleDrawer}: DrawerProps) => {
    return <Box className="w-80 mt-16" role="presentation" onClick={toggleDrawer(false)}>
      {user && <List>
          {getRoutes(user).map(data => (
            <ListItem key={data.route} disablePadding>
              <ListItemButton href={route(data.route)}>
                  <ListItemIcon>
                    <data.icon/>
                  </ListItemIcon>
                  <ListItemText primary={data.name} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>}
    </Box>
  };
  return (<>
    <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar variant="dense">
        <Container className="max-w-screen-xl mx-auto flex flex-nowrap">
          <div className='ml-0 flex'>
            {sidebar && <IconButton
              title="Sidebar"
              className="ml-0"
              onClick={toggleDrawer(!openSide)}
              size="small"
              sx={{ ml: 2 }}
            >
              <MenuSharpIcon color="secondary" className='sm:text-white w-12 h-12'/>
            </IconButton>}
            <Button href='/'variant="text" color='secondary'>
              <Icon size={40}/>
              <Typography variant="h6" color="white" className="ml-2" component="div">
                ADVOCAID
              </Typography>
            </Button>
          </div>
          <nav className="mr-0 my-auto flex flex-1 justify-end hidden sm:flex">
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
            title='Navigation'
            className="mr-0 ml-auto sm:hidden"
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
      <Box
        className="max-w-lg mx-auto"
        sx={{
          position: 'absolute',
          top: '50px',
          left: '20px',
          right: '20px',
        }}
      >
        {alerts.map((alert) => (
          <Slide
            key={alert.id}
            direction="down"
            in={true}
            timeout={{ enter: 400, exit: 400 }}
            mountOnEnter
            unmountOnExit
          >
            <Box
              key={alert.id}
              sx={{
                marginBottom: '10px',
                position: 'relative',
              }}
            >
              <Alert
                className="shadow-lg"
                severity={alert.type}
                onClose={() => removeAlert(alert.id)}
              >
                {alert.message}
              </Alert>
            </Box>
          </Slide>
        ))}
      </Box>
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
    <div className='mb-20'>
      {sidebar && <Drawer open={openSide} onClose={toggleDrawer(false)}>
        <DrawerList toggleDrawer={toggleDrawer}/>
      </Drawer>}
    </div>
  </>);
}
