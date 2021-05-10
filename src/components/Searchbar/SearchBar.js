import React from "react";
import { COLORS } from "../../theme/mainTheme";

const SearchBar = ({ type, placeHolder, name, value, onChange }) => {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <div className="flex">
        <input
          style={{
            fontFamily: "Nunito",
            caretColor: COLORS.primary300,
          }}
          className={`h-9 p-2 w-full border focus:outline-none`}
          type={type}
          placeholder={placeHolder}
          name={name}
          value={value || ""}
          onChange={(value) => onChange(value, name)}
        />
        <div
          className=" h-9 w-9 items-center flex"
          style={{ backgroundColor: COLORS.primary }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mx-auto text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
