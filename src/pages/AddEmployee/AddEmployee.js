import React from "react";
import { Button, DropDown, Text, TextBox } from "../../components";

const AddEmployee = () => {
  return (
    <div className="p-4 grid grid-cols-7">
      <div className="space-y-6 col-span-3">
        <div className="flex space-x-6">
          <div className="w-full">
            <TextBox
              label="First"
              placeHolder="first name"
              orientation="vertical"
              name="firstName"
            />
          </div>
          <div className="w-full">
            <TextBox
              label="Last"
              placeHolder="last name"
              orientation="vertical"
              name="lastName"
            />
          </div>
        </div>

        <div className="flex space-x-6">
          <div className="w-full">
            <TextBox
              placeHolder="Email"
              label="Employee Email"
              orientation="vertical"
              name="email"
            />
          </div>
          <div className="w-full">
            <TextBox
              label="Phone number"
              placeHolder="phone"
              orientation="vertical"
              name="phone"
            />
          </div>
        </div>

        <div>
          <div className="w-full">
            <DropDown
              label="select the account status"
              options={["approved", "rejected"]}
            />
          </div>
        </div>

        <div>
          <Button variant="primary200" color="primary">
            Create Employee
          </Button>
        </div>
      </div>
      <div className="col-span-4">
        <div className="text-center">
          <Text>Select the Affiliates to Authorize</Text>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
