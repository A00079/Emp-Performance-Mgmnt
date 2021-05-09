import React from "react";
import { DropDown, Searchbar } from "../../../../components";

const TableOptions = () => {
  return (
    <div>
      <div className="flex  items-center space-x-4 py-4">
        <div>
          <DropDown def="10" options={[10, 20, 30, 40, 50]} />
        </div>
        <div className="w-full">
          <Searchbar placeHolder="Search" />
        </div>
        <div>
          <DropDown def="SORT" options={[10, 20, 30, 40, 50]} />
        </div>
      </div>
    </div>
  );
};

export default TableOptions;
