import React from "react";
import Text from "../Text";
import { COLORS } from "../../theme/mainTheme";

const Button = ({ children, variant, color, size, onClick, isDisable }) => {
  return (
    <div>
      <button
        disabled={isDisable}
        onClick={onClick}
        className="py-1 focus:outline-none w-full"
        style={{ backgroundColor: isDisable ? COLORS.gray100 : COLORS[variant], color: isDisable ? "#777" :  COLORS[color] }}
      >
        <Text size={size} weight="700">
          {children}
        </Text>
      </button>
    </div>
  );
};

export default Button;
