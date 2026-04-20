import { TextareaHTMLAttributes } from "react";
import styles from "./TextArea.module.css";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextArea({
  className = "",
  ...props
}: TextAreaProps): JSX.Element {
  return (
    <textarea
      className={[styles.textarea, className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}
