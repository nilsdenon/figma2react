import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder6: "rounded-radius6" };
const variants = {
  FillBlue50: "bg-blue-100 text-blue-600",
  FillBlue700: "bg-blue-600 text-white_A700",
};
const sizes = {
  sm: "3xl:p-[10px] lg:p-[6px] p-[8px] 2xl:p-[9px]",
  md: "lg:p-[12px] p-[15px] 2xl:p-[16px] 3xl:p-[20px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder6"]),
  variant: PropTypes.oneOf(["FillBlue50", "FillBlue700"]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder6",
  variant: "FillBlue50",
  size: "sm",
};

export { Button };
