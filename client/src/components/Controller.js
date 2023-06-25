import React, { useState } from "react";

const Controller = ({ props }) => {
  const { getListings, getOneListing, clearListings } = props;
  const [id, setId] = useState("10");

  return (
    <div className="bg-slate-600">
      <div className="m-8 mx-auto max-w-md rounded-md bg-slate-400 p-2 text-center">
        <div className="mx-auto grid max-w-sm grid-cols-1 gap-4 rounded-md bg-slate-400 p-2 text-slate-800">
          <button className="rounded-md bg-slate-200 py-2 hover:bg-slate-100">
            Create New Listing
          </button>
          <button
            className="rounded-md bg-slate-200 py-2 hover:bg-slate-100"
            onClick={getListings}
          >
            View All Listings
          </button>
          <div>
            <button
              className="rounded-md bg-slate-200 py-2 hover:bg-slate-100"
              onClick={() => getOneListing(id)}
            >
              Get One Listing
            </button>
            <input
              type="text"
              id="listing-input"
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <button className="rounded-md bg-slate-200 py-2 hover:bg-slate-100">
            Update Listing
          </button>
          <button
            className="rounded-md bg-slate-200 py-2 hover:bg-slate-100"
            onClick={clearListings}
          >
            Clear Listings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controller;
