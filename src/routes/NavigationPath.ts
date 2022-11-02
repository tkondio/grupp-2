import Dashboard from "../pages/dashboard/Dashboard";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login/Login";

type NavType = {
  name: string;
  path: string;
  component: React.FC;
};

const NavigationPath: NavType[] = [
  {
    name: "SINUSUSS",
    path: "/",
    component: LandingPage,
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
  },
  {
    name: "Kasutaja",
    path: "/dashboard",
    component: Dashboard,
  },
];

export default NavigationPath;
