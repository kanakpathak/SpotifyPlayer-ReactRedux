import {
  STORE_TOKEN_SUCCESS,
  STORE_TOKEN_FAIL
} from "../actions/home/home.type";

const initialState = {
  accessToken: "",
  refreshToken: "",
  tokenSuccess: false
};

const Token = (state = initialState, action) => {
  switch (action.type) {
    case STORE_TOKEN_SUCCESS:
      return {
        ...state,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        tokenSuccess: true
      };

    case STORE_TOKEN_FAIL:
      return {
        ...state,
        tokenSuccess: false
      };

    default:
      return state;
  }
};

export default Token;
