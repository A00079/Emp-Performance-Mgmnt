import React from "react";
import { DropDown } from "../../../../components";

const TableOptions = () => {
  return (
    <div>
      <div className="flex border items-center space-x-4 p-4">
        <div>
          <DropDown def="10" options={[10, 20, 30, 40, 50]} />
        </div>
      </div>
    </div>
  );
};

export default TableOptions;
