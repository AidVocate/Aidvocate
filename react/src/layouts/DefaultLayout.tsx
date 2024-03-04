import { Outlet }  from "react-router-dom";
import Navigation from '../components/Navigation';

export default function Layout() {
  const backgroundImageUrl = 'url("/background.webp")';
  return (
    <div
        style={{
          backgroundImage: backgroundImageUrl,
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
