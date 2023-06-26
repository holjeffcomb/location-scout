import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";

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
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      key={loc_id}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        <a href={`/listing/${loc_id}`}>{loc_id}</a>
                      </Table.Cell>
                      <Table.Cell>{address_1}</Table.Cell>
                      <Table.Cell>{rating}</Table.Cell>
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
