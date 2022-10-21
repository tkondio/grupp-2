import { createLogicalNot } from "typescript";

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
    name: "Register",
    path: "/register",
    component: Register,
  },
  {
    name: "Account",
    path: "/account",
    component: Account,
  },
  {
    name: "Mens",
    path: "/mens",
    component: Mens,
  },
  {
    name: "Womens",
    path: "/womens",
    component: Womens,
  },
  {
    name: "ShoppingBag",
    path: "/shoppingbag",
    component: Shoppingbag,
  },
];

export default NavigationPath;
