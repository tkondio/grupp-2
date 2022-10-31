import { getAuthorizationHeader } from "../../helpers/authHelpers";
import ApiPath from "../endpoint";
import getPath from "../utils";

export async function registerUser(user: any): Promise<any> {
  const response = await fetch(getPath(ApiPath.Auth.register), {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
      // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…zM0fQ.nfacO9S7U2VF-v-gAzYP0RYaE8s2i1lvIAq6SEot6zo"
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

export async function getCurrentUser(): Promise<any> {
  const response = await fetch(getPath(ApiPath.Auth.currentUser), {
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
