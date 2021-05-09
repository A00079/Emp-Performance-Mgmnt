import React from "react";
import { COLORS } from "../../theme/mainTheme";

const SearchBar = ({ type, placeHolder, name, value, onChange }) => {
  return (
    <div>
      <input
        style={{
          fontFamily: "Nunito",
          caretColor: COLORS.primary300,
        }}
        className={`p-2 w-full border focus:outline-none`}
        type={type}
        placeholder={placeHolder}
        name={name}
        value={value || ""}
        onChange={(value) => onChange(value, name)}
      />
    </div>
  );
};

export default SearchBar;
