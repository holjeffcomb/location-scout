import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ListingSummary = () => {
  const routeParams = useParams();

  const [listing, setListing] = useState({});

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
  }, []);

  return (
    <>
      <div>{listing.loc_id}</div>
      <div>{listing.address_1}</div>
      <div>{listing.rating}</div>
      <div>{listing.seller_name}</div>
      <div>{listing.seller_email}</div>
      <div>{listing.photo}</div>
    </>
  );
};

export default ListingSummary;
