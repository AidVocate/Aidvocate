import { createContext, useContext } from 'react';
import AdminDashboard from '@/Pages/Admin/Index';
import ClientDashboard from '@/Pages/Client/Index';
import LawyerDashboard from '@/Pages/Lawyer/Index';
import PBODashboard from '@/Pages/PBO/Index';
import { OverridableComponent, } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import MailIcon from '@mui/icons-material/Mail';

interface Routes {
  name:string
  route: string
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string }
}

interface RouteContextProps {
  getRoutes: (user: inertia.User) => Routes[],
  getDashboard: (user: inertia.User) => JSX.Element,
}

interface RouteMapType {
  [role: string]: Routes[]
}

interface DashboardMapType {
  [role: string]: JSX.Element 
}

const RouteMap: RouteMapType = {
  Admin: [],
  Client: [
    {name: "Create Legal Need", route: "createLegalNeed", icon: MailIcon},
    {name: "View Legal Need", route: "client-ViewLegalNeed", icon: MailIcon},
  ],
  Lawyer: [
    {name: "Legal Need Board", route: "lawyer.board", icon: MailIcon},
    {name: "Lawyer's Cases", route: "lawyer.cases", icon: MailIcon},
  ],
  PBO: [
    {name: "Legal Need Board", route: "cases.index", icon: MailIcon},
    {name: "Lawyer Offers Board", route: "offers.index", icon: MailIcon},
    {name: "Active Legal Needs Board", route: "active.index", icon: MailIcon},
  ]
}

const DashboardMap: DashboardMapType = {
  Default: (<></>),
  Admin: (<AdminDashboard/>),
  Client: (<ClientDashboard/>),
  Lawyer: (<LawyerDashboard/>),
  PBO: (<PBODashboard/>)
}

const getRoutes = (user: inertia.User) => {
  if (!user) {
    return []
  }
  const routes = RouteMap[user.Role]
  if (!RouteMap[user.Role]) {
    return []
  }
  return routes
};

const getDashboard = (user: inertia.User) => {
  if (!user) {
    return DashboardMap.Default
  }
  return DashboardMap[user.Role] || DashboardMap.Default
}

const RouteContext = createContext<RouteContextProps>({
  getRoutes: getRoutes,
  getDashboard: getDashboard
});

export const RouteProvider = ({ children }: Children) => {
  return (
    <RouteContext.Provider value={{ getRoutes, getDashboard }}>
      {children}
    </RouteContext.Provider>
  );
};

export const useRouteContext = () => useContext(RouteContext)