import styles from "./Tag.module.css";
import { TagProps } from "./Tag.props";
import cn from "classnames";

export const Tag = ({
  size = "medium",
  children,
  color = "ghost",
  href,
  className,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div className={cn(styles.tag, styles[size], styles[color])}>
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
