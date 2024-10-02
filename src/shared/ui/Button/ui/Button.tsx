import { ButtonHTMLAttributes, FC, memo } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import cls from "./Button.module.scss";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  otherClasses?: string;
  variants?: ButtonVariants[];
  onClick?: () => void;
}
export const enum ButtonVariants {
  primary = "primary",
  secondary = "secondary",
  rounded = "rounded",
  outline = "outline",
  warning = "warning",
}

const Button: FC<ButtonProps> = memo(
  ({ otherClasses, onClick, variants, children }) => {
    return (
      <button
        data-testid="button_test"
        onClick={onClick}
        className={classNames(
          cls.button,
          {
            [cls[ButtonVariants.outline]]: variants?.find(
              item => item == ButtonVariants.outline,
            ),
            [cls[ButtonVariants.primary]]: variants?.find(
              item => item == ButtonVariants.primary,
            ),
            [cls[ButtonVariants.rounded]]: variants?.find(
              item => item == ButtonVariants.rounded,
            ),
            [cls[ButtonVariants.secondary]]: variants?.find(
              item => item == ButtonVariants.secondary,
            ),
            [cls[ButtonVariants.warning]]: variants?.find(
              item => item == ButtonVariants.warning,
            ),
          },
          [otherClasses],
        )}
      >
        {children}
      </button>
    );
  },
);

export { Button };
