//
//
import type { ReactNode, MouseEvent } from "react";
type ButtonProps = {
  children: ReactNode;
  label: string;
  onClick: (event: MouseEvent) => void;
  disabled?: boolean;
  type: "submit" | "button" | "reset";
  className: string;
};
export function Button({
  children,
  label,
  onClick,
  disabled,
  type,
  className,
}: ButtonProps) {
  return (
    <div>
      {children}
      <button
        className={className}
        type={type}
        disabled={disabled}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
}
