import React, { useState } from "react";
import { COLORS } from "../../theme/mainTheme";
import Text from "../Text/Text";

const DropDown = ({ label, options, setDropDownOption, def }) => {
  const [option, setOption] = useState(def ? def : !def ? label : null);
  const [list, setList] = useState(true);

  const handleOptionSelection = (selectedOption) => {
    setDropDownOption(selectedOption);
    setOption(selectedOption);
    setList(false);
  };

  return (
    <div class="group relative">
      <button
        onMouseEnter={() => setList(true)}
        class=" w-full outline-none focus:outline-none border px-3 py-1.5 bg-white rounded-sm flex items-center min-w-32"
      >
        <span class="pr-1 flex-1">
          <Text variant="primary" size="sm" weight="700" classes="capitalize">
            {def !== option ? option : def}
          </Text>
        </span>
        <span>
          <svg
            class="fill-current h-4 w-4 transform group-hover:-rotate-180
              transition duration-150 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </span>
      </button>
      <ul
        class={`${
          list ? "block" : "hidden"
        } w-full ${options.length > 5 && 'h-40 overflow-y-scroll custom-scroll' } absolute bg-white border-l border-r border-b rounded-sm transform scale-0 group-hover:scale-100 absolute 
                  transition duration-150 ease-in-out origin-top min-w-32 z-20`}
      >
        {options.map((el, index) => (
          <li
            onClick={() => handleOptionSelection(el)}
            key={index}
            class={` rounded-sm px-3 py-1 hover:bg-blue-50 cursor-pointer`}
          >
            <Text variant="primary" size="sm" classes="capitalize">
              {el}
            </Text>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
