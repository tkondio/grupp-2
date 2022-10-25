import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import ShoppingBag from "../pages/Shoppingbag";

type NavType = {
  icon: string;
  path: string;
  component: React.FC;
};

const NavigationPath: NavType[] = [
  {
    icon: "SINUSUSS",
    path: "/",
    component: LandingPage,
  },
  {
    icon: "accounticon",
    path: "/login",
    component: Login,
  },
  /*{
    name: "Registreeru",
    path: "/register",
    component: Register,
  },
  {
    name: "Kasutaja",
    path: "/account",
    component: Account,
  },*/
  {
    icon: "basketicon",
    path: "/shoppingbag",
    component: ShoppingBag,
  },
];

export default NavigationPath;
