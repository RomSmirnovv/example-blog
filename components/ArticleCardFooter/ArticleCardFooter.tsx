import Link from "next/link";
import { ArticleCardFooterProps } from "./ArticleCardFooter.props";
import styles from "./ArticleCardFooter.module.css";
import Image from "next/image";
import cn from "classnames";

export const ArticleCardFooter = ({
  readTime,
  href,
  className,
}: ArticleCardFooterProps): JSX.Element => {
  return (
    <div className={cn(styles["article-card-footer"], className)}>
      <span className={cn(styles["article-card-time"])}>{readTime}</span>

      <Link href={href} className={cn(styles["article-card-link"])}>
        Читать
        <span className={cn(styles["article-card-arrow"])}>→</span>
      </Link>
    </div>
  );
};
