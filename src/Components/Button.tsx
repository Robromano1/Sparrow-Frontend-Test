import { FC, ReactNode, ReactElement } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  disabled,
  className,
}): ReactElement => {
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default Button;
