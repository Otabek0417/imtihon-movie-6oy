import { useRef } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Search() {
  const inputVal = useRef();
  const { setUrl, isPending } = useGlobalContext();
  const handeSubmit = (e) => {
    e.preventDefault();
    const values = inputVal.current.value;
    const url = `https://www.omdbapi.com/?s=${values}&apikey=aad8c2b3`;
    setUrl(url);
    inputVal.current.value = "";
  };
  return (
    <div className="pt-6">
      <form className="flex gap-4" onSubmit={handeSubmit}>
        <input
          ref={inputVal}
          type="text"
          placeholder="Movie search"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <button className="btn btn-info">Search</button>
      </form>
    </div>
  );
}

export default Search;
