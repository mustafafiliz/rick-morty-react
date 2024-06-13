import React from "react";

type Props = {
  name?: string;
  variant?: "primary" | "danger";
  className?: string;
  icon?: React.ReactNode;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  name,
  variant = "primary",
  className = "",
  icon,
  onClick,
  type = "button",
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`p-2 flex items-center gap-3 rounded-lg text-white font-medium text-sm border ${
        variant === "primary"
          ? "bg-primary-500 border-primary-500"
          : "bg-red-500 border-red-500"
      } ${className}`}
    >
      <span>{icon}</span> {name}
    </button>
  );
};

export default Button;
