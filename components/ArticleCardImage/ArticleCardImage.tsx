import { ArticleCardImageProps } from "./ArticleCardImage.props";
import styles from "./ArticleCardImage.module.css";
import Image from "next/image";
import cn from "classnames";

export const ArticleCardImage = ({
  src,
  alt,
  className,
}: ArticleCardImageProps): JSX.Element => {
  return (
    <div className={cn(styles["article-card-image-wrap"], className)}>
      <Image
        src={src}
        alt={alt}
        width={920}
        height={560}
        className={cn(styles["article-card-image"])}
      />
    </div>
  );
};
