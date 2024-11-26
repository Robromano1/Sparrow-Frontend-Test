import { FC, ReactNode, ReactElement, MouseEventHandler } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
  tabIndex?: number;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  disabled,
  className,
  tabIndex,
  type,
}): ReactElement => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={className}
      tabIndex={tabIndex}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
