import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import * as Storage from "../store/localStorage"
import useConfig from "../hooks/useConfig";

const initialState = {
  isAuthenticated: false,
  admin: null,
};

const reducers = {
  UPDATE: (state, action) => {
    const admin = action.payload;
    return { ...state, admin, isAuthenticated: true };
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    admin: null,
  }),
};

const reducer = (state, action) =>
  reducers[action.type] ? reducers[action.type](state, action) : state;

const AuthContext = createContext({
  ...initialState,
  logout: () => Promise.resolve(),
  updateUserContext: () => Promise.resolve(),
});

AuthProvider.propTypes = {
  children: PropTypes.node,
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const config = useConfig();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    Storage.remove(config.sessionKey);
  };

  const updateUserContext = (data) => {
    dispatch({ type: "UPDATE", payload: data });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        logout,
        updateUserContext,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
