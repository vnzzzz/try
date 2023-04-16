import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

// types
import { ItemStateType } from "../types/api";

// config
import config from "../../config/config.json";
const apiUrl: string = config.API_URL + "items";

export const getItems = () => {
  const [state, setState] = useState<ItemStateType>({
    items: {
      isLoading: true,
    },
  });

  // cookie
  const [cookies, setCookie, removeCookie] = useCookies();

  useEffect(() => {
    fetchRequest();
  }, []);

  const fetchRequest = () => {
    setState((prevState) => ({ ...prevState, loading: true }));

    //APIからデータ取得
    axios
      .get(apiUrl, {
        headers: { Authorization: "Bearer " + cookies["access_token"] },
      })
      .then((res) => res.data)
      .then((data) => {
        setState({
          items: {
            isLoading: false,
            items: data,
          },
        });
      });
  };

  return state;
};
