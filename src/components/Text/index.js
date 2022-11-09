import React from "react";
const variantClasses = {
  h1: "font-semibold lg:text-[14px] text-[18px] 2xl:text-[20px] 3xl:text-[24px]",
  h2: "lg:text-[12px] text-[16px] 2xl:text-[18px] 3xl:text-[21px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
