// Role
export const Role = {
  Admin: "admin",
};

export type RoleType = typeof Role[keyof typeof Role];
// Location
export type LocationType = {
  state: { from: { pathname: string } };
};

// User
export type UserType = {
  name: string;
  role: RoleType;
};

// Auth
export type AuthUserContextType = {
  user: UserType | null;
  signin: (user: UserType, callback: () => void) => void;
  signout: (callback: () => void) => void;
};

// Props
export type AuthUserPropsType = {
  children: React.ReactNode;
};

export type PrivateRoutePropsType = {
  component: React.ReactNode;
  redirect: string;
  allowroles?: RoleType[];
};

export type AppProvidersPropsType = {
  children: React.ReactNode;
};
