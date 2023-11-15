import React from "react";

function Signup() {
  return (
    <div className="max-w-xl py-10 flex flex-col justify-center items-center">
      <h1 className="text-3xl">Signup</h1>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Your name:</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Email:</span>
        </label>
        <input
          type="email"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Password:</span>
        </label>
        <input
          type="password"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <button className="btn btn-primary my-10">Signup</button>
      {/* google */}
    </div>
  );
}

export default Signup;
