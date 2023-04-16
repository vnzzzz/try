import React, { FC, SyntheticEvent, useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
import { useCookies } from "react-cookie";
import { useNavigate, useLocation } from "react-router-dom";

// types
import { UserType, LocationType, AuthUserContextType } from "../types/auth";

// config
import config from "../../config/config.json";

// authentication
import { useAuthUserContext } from "./AuthUser";

export const Login: FC = () => {
  // input username/password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // cookie
  const [cookies, setCookie, removeCookie] = useCookies();

  // signin
  const navigate = useNavigate();
  const location: LocationType = useLocation() as LocationType;
  const fromPathName: string = location.state.from.pathname;
  const authUser: AuthUserContextType = useAuthUserContext();

  const handlerLogin = async (e: SyntheticEvent) => {
    e.preventDefault();

    interface RequestBody {
      username: string;
      password: string;
    }

    const requestData: RequestBody = {
      username: username,
      password: password,
    };

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      accept: "application/json",
    };

    const auth_url: string = config.API_URL + "token";
    axios
      .post(auth_url, requestData, { headers })
      .then((res) => {
        setCookie("resultCode", res.status);
        if (res.status === 200) {
          const access_token: string = res.data.access_token;
          setCookie("access_token", access_token);

          // signin
          const user: UserType = {
            name: username,
            role: "admin",
          };
          authUser.signin(user, () => {
            navigate(fromPathName, { replace: true });
          });
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <h1>Sign in</h1>
      <form onSubmit={handlerLogin}>
        <ul>
          <li>
            <label>username</label>
            <input
              type="username"
              placeholder="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </li>
          <li>
            <label>password</label>
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
        </ul>
        <button type="submit">Sign in</button>
      </form>
    </>
  );
};
