import React from "react";
import { useState } from "react";
import { DropDown, ImageField, TextBox, Text, Button } from "../../components";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { COLORS } from "../../theme/mainTheme";

const CreateOffer = () => {
  const [input, setInput] = useState({});
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const selectionRange = {
    startDate: dateRange.startDate,
    endDate: dateRange.endDate,
    key: "selection",
  };

  const adsModel = [
    "CPA - Cost per action",
    "CPC - Cost per click",
    "CPV - Cost per visit",
    "CPL - Cost per lead",
    "CPL - Cost per lead",
    "CPD - Cost per download",
    "CPS - Cost per Sale",
    "CPM - Cost per thousand imps",
    "CPI - Cost per install",
    "CPA + CPS - Cost per action + share %",
  ];

  const handleSelect = (e) => {
    console.log(e.selection);
    setDateRange({
      startDate: e.selection.startDate,
      endDate: e.selection.endDate,
    });
  };

  return (
    <div className="p-2">
      <div className="grid gap-5 grid-cols-5">
        <div className="col-span-3">
          <div className="space-y-4">
            <div className="flex items-end space-x-4">
              <div className="w-full">
                <TextBox
                  orientation="vertical"
                  label="offer name"
                  placeHolder="name"
                  type="text"
                  required="true"
                  name="name"
                  value={input.name}
                  onChange={(val) => handleInputChange(val)}
                />
              </div>

              <div className="w-full">
                <DropDown
                  setDropDownOption={(option) => console.log(option)}
                  options={["USD", "EURO", "RUPEE"]}
                  label="Choose offer currency"
                />
              </div>
            </div>
            <div className="flex items-end space-x-4">
              <div className="w-full">
                <DropDown
                  setDropDownOption={(option) => console.log(option)}
                  options={["adv1", "adv2", "adv3"]}
                  label="select Advertiser"
                />
              </div>

              <div className="w-full">
                <DropDown
                  setDropDownOption={(option) => console.log(option)}
                  options={["Savings", "Demat", "Gaming"]}
                  label="Select offer category"
                />
              </div>
            </div>
            <div className="flex items-end space-x-4">
              <div className="w-full">
                <DropDown
                  setDropDownOption={(option) => console.log(option)}
                  options={adsModel}
                  label="Affiliate Model - Cost"
                />
              </div>

              <div className="w-48">
                <TextBox
                  orientation="vertical"
                  placeHolder="0.00"
                  type="number"
                  required="true"
                  name="cost"
                  value={input.cost}
                  onChange={(val) => handleInputChange(val)}
                />
              </div>
            </div>
            <div className="flex items-end space-x-4">
              <div className="w-full">
                <DropDown
                  setDropDownOption={(option) => console.log(option)}
                  options={adsModel}
                  label="Advertiser Model - Revenue"
                />
              </div>

              <div className="w-48">
                <TextBox
                  orientation="vertical"
                  placeHolder="0.00"
                  type="number"
                  name="revenue"
                  value={input.revenue}
                  onChange={(val) => handleInputChange(val)}
                />
              </div>
            </div>
            <div className="w-full">
              <div className="py-2">
                <Text>Select offer start date and end date</Text>
              </div>
              <DateRange
                rangeColors={[`${COLORS.primary}`]}
                direction="hotizontal"
                months={2}
                ranges={[selectionRange]}
                onChange={handleSelect}
              />
            </div>
            <div>
              <DropDown
                setDropDownOption={(option) => console.log(option)}
                options={["Private", "Ended", "Public"]}
                label="Offer Visibility"
              />
            </div>
            <div>
              <Button
                color="primary"
                variant="primary200"
                size="lg"
                isDisable={false}
              >
                Create Offer
              </Button>
            </div>
          </div>
        </div>
        <div className="p-4 col-span-2">
          <ImageField label="select offer logo" />
        </div>
      </div>
    </div>
  );
};

export default CreateOffer;
