import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

function ErrorPage() {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div className="error-page flex flex-col gap-3">
        <h1 className="text-3xl">Page not found</h1>
        <Link to="/" className="btn btn-outline btn-primary mb-9">
          <IoArrowBack></IoArrowBack>
          Back
        </Link>
      </div>
    );
  }
  return (
    <div className="error-page flex flex-col gap-3">
      <h1 className="text-3xl">Something went wrong</h1>
      <a href="/" className="btn btn-outline btn-primary mb-9">
        <IoArrowBack></IoArrowBack>
        Back
      </a>
    </div>
  );
}

export default ErrorPage;
