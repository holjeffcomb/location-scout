import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "flowbite-react";

const ListingSummary = () => {
  const routeParams = useParams();

  const [listing, setListing] = useState({});
  const rating = useRef("");

  const fetchListing = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/locations/${routeParams.id}`
      );
      const jsonData = await response.json();
      setListing(jsonData.rows[0]);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchListing();
  });

  useEffect(() => {
    for (let i = 0; i < listing.rating; i++) {
      rating.current += "*";
    }
  }, [listing.rating]);

  return (
    <>
      <div className="m-20 mx-auto grid max-w-lg bg-slate-400 text-zinc-600">
        <Link to="/">
          <Button>Back</Button>
        </Link>

        <div className="text-xl font-extrabold">{listing.loc_id}</div>
        <div className="font-bold">{listing.address_1}</div>
        <div>{rating.current}</div>
        <span>
          Seller: <p className="italic">{listing.seller_name}</p>
        </span>
        <div className="italic">{listing.seller_email}</div>
        <div>
          <img src={listing.photo} alt={listing.photo} />
        </div>
      </div>
    </>
  );
};

export default ListingSummary;
