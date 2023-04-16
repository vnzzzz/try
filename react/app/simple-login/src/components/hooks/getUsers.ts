import axios from "axios";
import { useEffect, useState } from "react";

// types
import { UserStateType } from "../types/api";

// config
import config from "../../config/config.json";
const apiUrl: string = config.API_URL + "users";

export const getUsers = () => {
  const [state, setState] = useState<UserStateType>({
    users: {
      isLoading: true,
    },
  });

  useEffect(() => {
    fetchRequest();
  }, []);

  const fetchRequest = () => {
    setState((prevState) => ({ ...prevState, loading: true }));

    //APIからデータ取得
    axios
      .get(apiUrl)
      .then((res) => res.data)
      .then((data) => {
        setState({
          users: {
            isLoading: false,
            users: data,
          },
        });
      });
  };

  return state;
};
