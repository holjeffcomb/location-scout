import React from "react";

const ListingsList = ({ listings }) => {
  return (
    <div className="m-10">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                ADDRESS
              </th>
              <th scope="col" className="px-6 py-3">
                RATING
              </th>
              <th scope="col" className="px-6 py-3">
                SELLER
              </th>
              <th scope="col" className="px-6 py-3">
                SELLER EMAIL
              </th>
              <th scope="col" className="px-6 py-3">
                PHOTO
              </th>
            </tr>
          </thead>
          <tbody>
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
                <tr
                  key={loc_id}
                  className="border-b bg-white dark:border-gray-700 dark:bg-gray-900"
                >
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    <a href={`/listing/${loc_id}`}>{loc_id}</a>
                  </th>
                  <td className="px-6 py-4">{address_1}</td>
                  <td className="px-6 py-4">{rating}</td>
                  <td className="px-6 py-4">{seller_name}</td>
                  <td className="px-6 py-4">{seller_email}</td>
                  <td className="max-w-0 px-6 py-4">
                    <img src={photo} alt={loc_id} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListingsList;
