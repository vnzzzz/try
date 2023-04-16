import React from "react";
import {
  UserType,
  AuthUserContextType,
  AuthUserPropsType,
} from "../types/auth";

const AuthUserContext = React.createContext<AuthUserContextType>(
  {} as AuthUserContextType
);

export const useAuthUserContext = (): AuthUserContextType => {
  return React.useContext<AuthUserContextType>(AuthUserContext);
};

export const AuthUserProvider = (props: AuthUserPropsType) => {
  const [user, setUser] = React.useState<UserType | null>(null);

  const signin = (newUser: UserType, callback: () => void) => {
    setUser(newUser);
    callback();
  };

  const signout = (callback: () => void) => {
    setUser(null);
    callback();
  };

  const value: AuthUserContextType = { user, signin, signout };
  return (
    <AuthUserContext.Provider value={value}>
      {props.children}
    </AuthUserContext.Provider>
  );
};
