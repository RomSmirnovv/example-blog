import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  className = "",
  children,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      className={[styles.button, className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
