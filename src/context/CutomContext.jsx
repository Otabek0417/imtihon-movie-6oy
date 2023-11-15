import { createContext, useReducer, useState } from "react";
import { useFetch } from "../hooks/useFetch";
export const GlobalContext = createContext();

const initialState = localStorage.getItem("favourites")
  ? JSON.parse(localStorage.getItem("favourites"))
  : [];

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "TOGGLE_ITEM":
      if (!state.includes(payload)) {
        localStorage.setItem("favourites", JSON.stringify([...state, payload]));
        return [...state, payload];
      } else {
        localStorage.setItem(
          "favourites",
          JSON.stringify([...state.filter((item) => item !== payload)])
        );

        return [...state.filter((item) => item !== payload)];
      }
    default:
      return state;
  }
};

//!
export function GlobalContextProvider({ children }) {
  const [url, setUrl] = useState(
    "https://www.omdbapi.com/?s=merlin&apikey=aad8c2b3"
  );
  const { data, isPending, error } = useFetch(url);

  const [state, dispatch] = useReducer(reducer, initialState);

  function toggleItem(id) {
    dispatch({ type: "TOGGLE_ITEM", payload: id });
  }
  return (
    <GlobalContext.Provider
      value={{ data, isPending, error, setUrl, state, toggleItem }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
