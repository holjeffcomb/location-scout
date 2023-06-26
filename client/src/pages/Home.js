import React, { useState } from "react";
import Controller from "../components/Controller";
import ListingsList from "../components/ListingsList";

const Home = () => {
  const [listings, setListings] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getListings = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/locations");
      const jsonData = await response.json();
      setListings(jsonData);
    } catch (error) {
      setErrorMsg(error.message);
      console.error(error.message);
    } finally {
      setIsLoading(false);
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
      {errorMsg ? (
        <h2 className="text-center text-xl text-red-500">Error: {errorMsg}</h2>
      ) : (
        ""
      )}
      {isLoading ? (
        <p className="text-center text-xl text-gray-400">Loading ...</p>
      ) : (
        <ListingsList listings={listings} />
      )}
    </>
  );
};

export default Home;
