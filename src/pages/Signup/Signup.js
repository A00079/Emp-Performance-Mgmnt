import React, { useState } from "react";
import { ImageField } from "../../components";
import { Form } from "./components";

const Signup = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-5 space-x-4">
        <div
          className="col-span-3 bg-blue-100"
          // style={{ maxWidth: "40%", width: "30%" }}
        >
          <div className="flex h-screen justify-center items-center">
            Features of this platform
          </div>
        </div>
        <div className="col-span-6 my-5 items-center ">
          <Form />
        </div>
        <div className="my-10 justify-center col-span-3 px-2">
          <ImageField />
        </div>
      </div>
    </div>
  );
};

export default Signup;
