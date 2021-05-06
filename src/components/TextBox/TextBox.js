import React, { useState } from "react";
import Text from "../Text/Text";

const TextBox = ({
  placeHolder,
  value,
  name,
  isLabel,
  label,
  onChange,
  outline,
  orientation,
  required,
  isError,
  errorMessage,
  svgCode,
  type,
}) => {
  const [passwordViewToggle, setPasswordViewToggle] = useState(false);

  return (
    <>
      <div
        className={`${
          orientation === "vertical" && "grid"
        } flex items-center mt-2 ${!orientation && "space-x-1.5"}`}
      >
        {isLabel && (
          <label>
            <Text size="md" classes="capitalize" variant="">
              {label}
            </Text>
          </label>
        )}

        <div className="flex relative items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute ml-2 h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d={svgCode}
            />
          </svg>
          {type === "password" && (
            <div
              onClick={() => setPasswordViewToggle(!passwordViewToggle)}
              className="absolute right-2"
            >
              {!passwordViewToggle ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
              )}
            </div>
          )}
          <input
            type={passwordViewToggle ? "text" : type}
            required={required}
            style={{ border: `1px solid ${outline ? outline : "#ccc"}` }}
            className={`w-full focus:outline-none pl-8 p-1.5 rounded-sm `}
            placeholder={placeHolder}
            name={name}
            value={value || ""}
            onChange={(value) => onChange(value, name)}
          />
        </div>
      </div>
    </>
  );
};

export default TextBox;