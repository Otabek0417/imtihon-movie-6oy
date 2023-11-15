import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { IoArrowBack } from "react-icons/io5";
function SinglePage() {
  const { id } = useParams();
  const url = `https://www.omdbapi.com/?i=${id}&apikey=aad8c2b3`;
  const { data, isPending, error } = useFetch(url);
  return (
    <>
      {isPending && (
        <div className="loader">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
      <div className="pt-20">
        <div className="cite-container">
          <Link to="/" className="btn btn-outline btn-primary mb-9">
            <IoArrowBack></IoArrowBack>
            Back
          </Link>
          <div className="card-wrapper card card-side shadow-indigo shadow-xl gap-20">
            <img className="rounded-lg" src={data && data.Poster} alt="Movie" />
            <div className="card-wrapper2 flex gap-28 items-center">
              <div className="box1">
                <h2 className="mb-2 font-bold text-3xl">
                  Title: {data && data.Title}
                </h2>
                <p className="mb-5">Released:{data && data.Released}</p>
                <p className="mb-5">Language:{data && data.Language}</p>
                <p className="mb-5">Actors:{data && data.Actors}</p>
                <p className="mb-5">Country:{data && data.Country}</p>
                <p className="mb-5">Genre:{data && data.Genre}</p>
                <p className="mb-5">Metascore:{data && data.Metascore}</p>
              </div>
              <div className="box2">
                <p className="mb-5">Awards :{data && data.Awards}</p>
                <p className="mb-5">Rated:{data && data.Rated}</p>
                <p className="mb-5">Runtime:{data && data.Runtime}</p>
                <p className="mb-5">Type:{data && data.Type}</p>
                <p className="mb-5">Year:{data && data.Year}</p>
                <p className="mb-5">Rating:{data && data.imdbRating}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SinglePage;
