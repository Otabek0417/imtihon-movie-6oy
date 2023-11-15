import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { IoMdHeart } from "react-icons/io";
import { toast } from "react-toastify";

function Favourite() {
  const { data, state, toggleItem } = useGlobalContext();
  const newData =
    data &&
    Object.values(data)[0].filter((item) => state.includes(item.imdbID));
  console.log(newData);

  return (
    <div>
      <ul className="grid md:grid-cols-2 lg:grid-cols-5  gap-10 pt-10 pb-10">
        {newData.length ? (
          newData.map((movie) => {
            const { Poster, Title, Type, Year, imdbID } = movie;
            return (
              <Link key={imdbID} to={`/singlePage/${imdbID}`}>
                <li className="card card-compact  bg-base-100 shadow-xl overflow-hidden rounded-xl">
                  <img
                    className="h-[300px] w-full object-cover"
                    src={Poster}
                    alt="Shoes"
                  />

                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      toggleItem(imdbID);
                      toast.error("You delete this movie");
                    }}
                    className=" flex items-center justify-center bg-black w-[30px] h-[30px] z-30 absolute right-2 top-3 rounded"
                  >
                    <IoMdHeart
                      className={`text-[21px] ${
                        state.includes(imdbID) ? "text-red-600" : "text-white"
                      }`}
                    ></IoMdHeart>
                  </div>

                  <div className="absolute bottom-0 w-full flex justify-between items-end bg-[#00000038] p-3 z-20 inset-0 pointer-events-none">
                    <h1 className="text-white text-xl font-semibold  break-normal break-words">
                      Uri: The Surgical Strike
                    </h1>
                    <h1 className="font-bold text-green-500 p-2 bg-zinc-900 rounded-full">
                      7.1
                    </h1>
                  </div>
                </li>
              </Link>
            );
          })
        ) : (
          <div className="no-favourites">
            <h1>no favourite</h1>
          </div>
        )}
      </ul>
    </div>
  );
}

export default Favourite;
