import { STORE_TOKEN_SUCCESS, STORE_TOKEN_FAIL } from "./home.type";

export const storeTokenSuccess = (accessToken, refreshToken) => {
  return {
    type: STORE_TOKEN_SUCCESS,
    accessToken: accessToken,
    refreshToken: refreshToken
  };
};
export const storeTokenFail = () => {
  return {
    type: STORE_TOKEN_FAIL
  };
};
