import React, { useState } from "react";
import { TextBox, Button, DropDown } from "../../components";

const Login = () => {
  const [input, setInput] = useState({});
  const [dropDownOption, setDropDownOption] = useState("Admin");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <div className="flex h-screen justify-center items-center">
    
    </div>
  );
};

export default Login;
