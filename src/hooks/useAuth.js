import React, { useReducer, useContext } from 'react';

const AuthContext = React.createContext();
const { Provider } = AuthContext;

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null
};

export const authActionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  LOAD: 'LOAD'
};

const reducer = (state, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.username,
        token: action.payload.token,
        claims: action.payload.claims,
        isLoading: false
      };
    case authActionTypes.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        isLoading: false
      };
    case authActionTypes.LOAD:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
};

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    authState: state,
    authDispatchLogin: (payload) => dispatch({ type: authActionTypes.LOGIN, payload }),
    authDispatchLogout: (payload) => dispatch({ type: authActionTypes.LOGOUT, payload }),
    authDispatchLoad: (payload) => dispatch({ type: authActionTypes.LOAD, payload })
  };

  return <Provider value={value}>{children}</Provider>;
}
