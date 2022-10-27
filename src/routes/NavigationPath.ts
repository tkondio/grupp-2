import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Shop from "../pages/Shop";
import ShoppingBag from "../pages/Shoppingbag";

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
    name: "accounticon",
    path: "/login",
    component: Login,
  },
  {
    name: "Registreeru",
    path: "/register",
    component: Register,
  },
  {
    name: "Kasutaja",
    path: "/dashboard",
    component: Dashboard,
  },
  {
    name: "Ostukorv",
    path: "/shoppingbag",
    component: ShoppingBag,
  },
  {
    name: "Pood",
    path: "/shop",
    component: Shop,
  },
];

export default NavigationPath;
