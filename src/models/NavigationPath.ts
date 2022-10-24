//import { createLogicalNot } from "typescript";
import LandingPage from "../pages/LandingPage";
import Account from "../pages/Account";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ShoppingBag from "../pages/Shoppingbag";
import Shop from "../pages/Shop";

type NavType = {
  name: string;
  path: string;
  component: React.FC;
};

const NavigationPath: NavType[] = [
  {
    name: "SINUSUSS",
    path: "/home",
    component: LandingPage,
  },
  {
    name: "Logi sisse",
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
    path: "/account",
    component: Account,
  },
  {
    name: "ShoppingBag",
    path: "/shoppingbag",
    component: ShoppingBag,
  },
  {
    name: "Shop",
    path: "/shop",
    component: Shop,
  },
]

export default NavigationPath;
