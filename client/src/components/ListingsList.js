import React, { useEffect, useState } from "react";
import { Table, Rating } from "flowbite-react";

const ListingsList = ({ listings }) => {
  const [listingsExist, setListingsExist] = useState(false);

  const checkSize = () => {
    Object.keys(listings).length > 0
      ? setListingsExist(true)
      : setListingsExist(false);
  };

  useEffect(() => {
    checkSize();
  });

  const ratingToArray = (rating) => {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      if (rating > i) {
        arr.push(true);
      } else {
        arr.push(false);
      }
    }
    return arr;
  };

  return (
    <>
      {listingsExist ? (
        <div className="mx-48 min-w-0">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell>ID</Table.HeadCell>
                <Table.HeadCell>ADDRESS</Table.HeadCell>
                <Table.HeadCell>RATING</Table.HeadCell>
                <Table.HeadCell>SELLER</Table.HeadCell>
                <Table.HeadCell>SELLER EMAIL</Table.HeadCell>
                <Table.HeadCell>PHOTO</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {listings.map((listing) => {
                  const {
                    loc_id,
                    address_1,
                    rating,
                    seller_name,
                    seller_email,
                    photo,
                  } = listing;
                  return (
                    <Table.Row
                      className="border-gray-600 bg-gray-400 text-zinc-800 dark:border-gray-700 dark:bg-gray-800 dark:text-zinc-200"
                      key={loc_id}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        <a href={`/listing/${loc_id}`}>{loc_id}</a>
                      </Table.Cell>
                      <Table.Cell>{address_1}</Table.Cell>
                      <Table.Cell>
                        <Rating>
                          {ratingToArray(rating).map((cell, index) => {
                            const key = index;
                            if (cell) {
                              return <Rating.Star filled={true} key={key} />;
                            } else {
                              return <Rating.Star filled={false} key={key} />;
                            }
                          })}
                        </Rating>
                      </Table.Cell>
                      <Table.Cell>{seller_name}</Table.Cell>
                      <Table.Cell>{seller_email}</Table.Cell>
                      <Table.Cell className="max-w-0">
                        <img src={photo} alt={loc_id} />
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default ListingsList;
