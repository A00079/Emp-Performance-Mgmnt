import React from "react";
import { DropDown, Searchbar, Text } from "../../../../components";

const TableOptions = () => {
  return (
    <div>
      <div className="flex items-end space-x-4 py-4">
        <div>
          <Text>Per page Records</Text>
          <DropDown def="10" options={[10, 20, 30, 40, 50]} />
        </div>
        <div className="w-full">
          <Searchbar placeHolder="Search..." />
        </div>
        <div className="w-96">
          <Text>Sort by</Text>
          <DropDown def="Offer Name" options={['Category', 'GEO', 'Revenue', 'Payout']} />
        </div>
      </div>
    </div>
  );
};

export default TableOptions;
