import { Outlet }  from "react-router-dom";
import Navigation from '../components/Navigation';

export default function Layout() {
  return (
    <div
        style={{
          backgroundImage: 'url("/background.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >        
        <Navigation/>
        <Outlet/>
    </div>
  );
}
