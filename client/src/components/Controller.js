import React, { useState } from "react";
import { Button } from "flowbite-react";

const Controller = ({ props }) => {
  const { getListings, getOneListing, clearListings, listingSize } = props;
  const [id, setId] = useState("10");

  return (
    <div>
      <div className="m-8 mx-auto max-w-md rounded-md bg-slate-400 p-2 text-center">
        <div className="mx-auto grid max-w-sm grid-cols-1 gap-4 rounded-md bg-slate-400 p-2 text-slate-800">
          <Button>Create New Listing</Button>
          <Button color="light" onClick={getListings}>
            View All Listings
          </Button>

          <div className="grid grid-cols-2">
            <Button color="light" onClick={() => getOneListing(id)}>
              Get One Listing
            </Button>
            <input
              className="mx-4"
              type="text"
              id="listing-input"
              placeholder="location ID"
              onChange={(e) => setId(e.target.value)}
            />
          </div>

          <Button color="light">Update Listing</Button>

          <Button
            disabled={listingSize > 0 ? false : true}
            color="failure"
            onClick={clearListings}
          >
            Clear Listings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Controller;
