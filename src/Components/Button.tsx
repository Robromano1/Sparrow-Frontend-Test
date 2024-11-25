import { FC, ReactNode, ReactElement } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  tabIndex?: number;
}

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  disabled,
  className,
  tabIndex,
}): ReactElement => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={className}
      tabIndex={tabIndex}
    >
      {children}
    </button>
  );
};

export default Button;
