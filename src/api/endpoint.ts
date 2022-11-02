export const BACKEND_BASE_PATH = "http://localhost:8000";

const ApiPath = {
  Auth: {
    register: "/auth/register",
    currentUser: "/auth/current-user",
    logIn: "/auth/login",
  },
  Product: {
    getList: "/products",
    cartItem: "/cart-items",
  },
};

export default ApiPath;
