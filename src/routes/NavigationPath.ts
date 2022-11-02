//import CartDemo from "../pages/CartDemo";
import CartDemo from "../pages/CartDemo";
import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login/Login";
import ShoppingCart from "../pages/ShoppingCart";

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
  {
    name: "Pood ja ostukorv",
    path: "/shoppingcart",
    component: ShoppingCart,
  },
  {
    name: "Pood ja ostukorvfds",
    path: "/cartdemo",
    component: CartDemo,
  },
];

export default NavigationPath;
