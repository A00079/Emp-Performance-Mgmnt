import React from "react";
import { Text, DropDown, Searchbar, Pagination } from "../../components";
import { COLORS } from "../../theme/mainTheme";

const Reports = () => {
  return (
    <div className="p-4">
      <div className="flex items-end space-x-4 py-4">
        <div>
          <Text variant="primary" size="xs">
            Records per page
          </Text>
          <DropDown def="10" options={[10, 20, 30, 40, 50]} />
        </div>
        <div className="w-full">
          <Searchbar placeHolder="Search..." />
        </div>
        <div className="w-96">
          <DropDown
            label="Sort By"
            options={["Offer Name", "Conversion", "Payout"]}
          />
        </div>
      </div>
      <div
        className={` w-full inline-block overflow-y-scroll custom-scroll`}
        style={{ height: "52rem" }}
      >
        <table className="w-full ">
          <thead>
            <tr
              className="text-left border bg-gray-600"
              style={{ backgroundColor: COLORS.primary }}
            >
              <th className="py-4 px-2 w-52">
                <Text variant="white">Offer</Text>
              </th>
              <th>
                <Text variant="white">Offer Name</Text>
              </th>
              <th>
                <Text variant="white">Publisher</Text>
              </th>
              <th>
                <Text variant="white">Conversion</Text>
              </th>
              <th>
                <Text variant="white">Payout</Text>
              </th>
              <th>
                <Text variant="white">Earning</Text>
              </th>
              <th>
                <Text variant="white">Revenue</Text>
              </th>
            </tr>
          </thead>
          <tbody className="border ">
            {[...new Array(20)].map((el, index) => (
              <tr className={index % 2 === 0 && `bg-blue-50`}>
                <td className="p-2">
                  <img src="/img/offer-logo.jpg" width="120" />
                </td>
                <td>
                  <Text weight="700" size="md" variant="primary">
                    Motilal Oswal[CPL]2021
                  </Text>
                </td>
                <td>
                  <Text variant="primary">publisher name</Text>
                </td>
                <td>
                  <div className="bg-blue-100 rounded-full inline-block px-2 py-1">
                    <Text
                      size="lg"
                      variant="blue"
                      weight="700"
                      classes="capitalize"
                    >
                      40
                    </Text>
                  </div>
                </td>
                <td>
                  <Text classes="capitalize" weight="700">
                    5452
                  </Text>
                </td>
                <td>
                  <Text classes="capitalize" weight="700">
                    4485
                  </Text>
                </td>
                <td className="">
                  <div className="bg-green-200 inline-block px-4 py-1">
                    <Text classes="capitalize" weight="700">
                      542541
                    </Text>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Pagination setCurrentPage={(p) => console.log(p)} />
      </div>
    </div>
  );
};

export default Reports;
