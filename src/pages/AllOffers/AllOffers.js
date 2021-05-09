import React from "react";
import { Text } from "../../components";
import { COLORS } from "../../theme/mainTheme";
import { Pagination, TableOptions } from "./components";

const AllOffers = () => {
  return (
    <div className="space-y-4 p-4">
      <TableOptions />
      <table className="w-full">
        <thead>
          <tr
            className="text-left border bg-gray-600"
            style={{ backgroundColor: COLORS.primary }}
          >
            <th className="py-4 px-2 w-52">
              <Text variant="white">offer</Text>
            </th>
            <th>
              <Text variant="white">Offer Name</Text>
            </th>
            <th>
              <Text variant="white">Category</Text>
            </th>
            <th>
              <Text variant="white">GEO</Text>
            </th>
            <th>
              <Text variant="white">Revenue</Text>
            </th>
            <th>
              <Text variant="white">Payout</Text>
            </th>
            <th>
              <Text variant="white">Action</Text>
            </th>
            <th>
              <Text variant="white">Status</Text>
            </th>
          </tr>
        </thead>
        <tbody className="border">
          {[...new Array(4)].map((el, index) => (
            <tr className={index % 2 === 0 && `bg-blue-50`}>
              <td className="p-2 ">
                <img src="/img/offer-logo.jpg" width="120" />
              </td>
              <td>
                <Text>Motilal Oswal[CPL]2021</Text>
              </td>
              <td>
                <Text>Demat</Text>
              </td>
              <td>
                <Text classes="capitalize">All Countries</Text>
              </td>
              <td>
                <Text classes="capitalize">CPA USD 1</Text>
              </td>
              <td>
                <Text classes="capitalize">CPA USD 1</Text>
              </td>
              <td>
                <div className="flex space-x-4 items-center ">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-blue-500 cursor-pointer"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                      <path
                        fill-rule="evenodd"
                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-red-500 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </div>
                </div>
              </td>
              <td>
                <Text classes="capitalize">Public</Text>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center">
        <Pagination setCurrentPage={(p) => console.log(p)} />
      </div>
    </div>
  );
};

export default AllOffers;
