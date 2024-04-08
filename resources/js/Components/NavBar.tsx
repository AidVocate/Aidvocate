import Icon from '@/Components/Icon';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

interface Props {
  routes: string[][]
}

export default function NavBar({ routes }: Props) {
    return (
      <AppBar>
        <Toolbar variant="dense" className="flex items-center justify-center">
            <Container className="max-w-screen-xl mx-auto flex">
              <IconButton href='/' className="mr-5" edge="start" color="inherit" aria-label="menu">
                <Icon size={40}/>
                <Typography variant="h6" color="inherit" className="ml-2" component="div">
                    ADVOCAID
                </Typography>
              </IconButton>
              <nav className="my-auto flex flex-1 justify-end">
                {routes.map((routeInfo) => (
                  <Link
                      href={route(routeInfo[1])}
                      className="ml-6 text-white"
                  >
                    {routeInfo[0]}
                  </Link>
                ))}
              </nav>
            </Container>
        </Toolbar>
    </AppBar>
    );
}
