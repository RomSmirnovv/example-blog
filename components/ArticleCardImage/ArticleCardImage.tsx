import Link from "next/link";
import { ArticleCardImageProps } from "./ArticleCardImage.props";
import styles from "./ArticleCardImage.module.css";
import Image from "next/image";
import cn from "classnames";

export const ArticleCardImage = ({
  href,
  src,
  alt,
  title,
  className,
}: ArticleCardImageProps): JSX.Element => {
  return (
    <Link
      href={href}
      className={cn(styles["article-card-image-wrap"], className)}
      aria-label={title}
    >
      <Image
        src={src}
        alt={alt}
        width={920}
        height={560}
        className={cn(styles["article-card-image"])}
      />
    </Link>
  );
};
