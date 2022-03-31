import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import {
  apiDataState,
  apiReducer,
  FETCH_FAILED,
  FETCH_LOCALSTORAGE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
} from "./reducers";

let url = "https://api.icndb.com/jokes";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [jokestate, dispatch] = useReducer(apiReducer, apiDataState);
  const [item20, setItem20] = useState([]);
  const [searchFilter, setSearchFilter] = useState([]);
  const [addedNew, setAddedNew] = useState(false);

  const fetchJoke = async () => {
    dispatch({ type: FETCH_REQUEST });
    await axios
      .get(url)
      .then((res) => {
        dispatch({ type: FETCH_SUCCESS, payload: res.data.value });
        const local = JSON.parse(localStorage.getItem("jokes"));
        if (local !== null) {
          dispatch({ type: FETCH_LOCALSTORAGE, payload: local });
        }
      })
      .catch((err) => {
        console.log("err ");
        dispatch({ type: FETCH_FAILED, payload: err.message });
      });
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  useEffect(() => {
    if (addedNew) {
      const local = JSON.parse(localStorage.getItem("jokes"));
      dispatch({ type: FETCH_LOCALSTORAGE, payload: [local[0]] });
      setAddedNew(false);
    }
  }, [addedNew]);

  return (
    <AppContext.Provider
      value={{
        jokestate,
        item20,
        setItem20,
        searchFilter,
        setSearchFilter,
        setAddedNew,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalcontext = () => {
  return useContext(AppContext);
};
