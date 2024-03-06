import { Outlet }  from "react-router-dom";
import Navigation from '../components/Navigation';

export default function Layout() {
  return (
    <div 
        style={{backgroundImage: 'url("/background.webp")',}}
        className="min-h-screen  flex flex-col fixed inset-0 overflow-y-auto bg-cover bg-center bg-fixed"
      >        
        <Navigation/>
        <Outlet/>
    </div>
  );
}
