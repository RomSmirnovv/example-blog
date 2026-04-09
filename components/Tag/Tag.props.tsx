import { HTMLAttributes, DetailedHTMLProps } from "react";

export interface TagProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  children: React.ReactNode;
  size?: "small" | "medium";
  color?: "ghost" | "red" | "grey" | "green" | "primary";
  href?: string;
}
