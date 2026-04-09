import { HTMLAttributes, DetailedHTMLProps } from "react";

export interface PProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
}
