import Icon from '@/Components/Icon';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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
            <nav className="my-auto flex flex-1 justify-end">
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
          </Container>
      </Toolbar>
    </AppBar>
    <div className='mb-20'/>
  </>);
}
