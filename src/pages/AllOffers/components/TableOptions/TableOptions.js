import React from "react";
import { DropDown, Searchbar, Text } from "../../../../components";

const TableOptions = () => {
  return (
    <div>
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
            options={["Offer Name", "Category", "GEO", "Revenue", "Payout"]}
          />
        </div>
      </div>
    </div>
  );
};

export default TableOptions;
