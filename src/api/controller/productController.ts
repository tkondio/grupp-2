import { getAuthorizationHeader } from "../../helpers/authHelpers";
import ApiPath from "../endpoint";
import getPath from "../utils";

export async function getProductList(): Promise<any> {
  const response = await fetch(getPath(ApiPath.Product.getList), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...getAuthorizationHeader(),
    },
  });
  if (response.status === 200) {
    const data = await response.json();

    return {
      body: data,
      isSuccess: true,
    };
  }
  return {
    isSuccess: false,
  };
}

export async function addCartItem(cartItem: any): Promise<any> {
  const response = await fetch(getPath(ApiPath.Product.cartItem), {
    method: "POST",
    body: JSON.stringify(cartItem),
    headers: {
      "Content-Type": "application/json",
      // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…zM0fQ.nfacO9S7U2VF-v-gAzYP0RYaE8s2i1lvIAq6SEot6zo"
    },
  });
  if (response.status === 201) {
    const data = await response.json();

    return {
      body: data,
      isSuccess: true,
    };
  }
  return {
    isSuccess: false,
  };
}
