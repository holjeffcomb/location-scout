import React, { useState } from "react";
import Controller from "../components/Controller";
import ListingsList from "../components/ListingsList";

const Home = () => {
  const [listings, setListings] = useState([]);

  const getListings = async () => {
    try {
      const response = await fetch("http://localhost:5000/locations");
      const jsonData = await response.json();

      setListings(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  const clearListings = () => {
    setListings([]);
  };

  const getOneListing = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/locations/${id}`);
      const jsonData = await response.json();
      setListings(jsonData.rows);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      <Controller props={{ getListings, clearListings, getOneListing }} />
      <ListingsList listings={listings} />
    </>
  );
};

export default Home;
