import Link from "next/link";
import { ArticleCardFooter } from "../ArticleCardFooter/ArticleCardFooter";
import { Htag } from "../Htag/Htag";
import { ArticleCardProps } from "./ArticleCard.props";
import { ArticleCardImage } from "../ArticleCardImage/ArticleCardImage";
import styles from "./ArticleCard.module.css";
import cn from "classnames";
import LikeIcon from "./like.svg";

export const ArticleCard = ({
  title,
  excerpt,
  href,
  imageSrc,
  imageAlt,
  category,
  publishedLabel,
  readTime,
  likesCount = 0,
  className,
}: ArticleCardProps): JSX.Element => {
  return (
    <article className={cn(styles["article-card"], className)}>
      <ArticleCardImage
        href={href}
        src={imageSrc}
        alt={imageAlt || title}
        title={title}
      />

      <div className={cn(styles["article-card-body"])}>
        <div className={cn(styles["article-card-meta-row"])}>
          <div className={cn(styles["article-card-meta"])}>
            <span>{category}</span>
            <span className={cn(styles["article-card-dot"])}>•</span>
            <span>{publishedLabel}</span>
          </div>

          <div
            className={cn(styles["article-card-likes"])}
            aria-label={`${likesCount} лайков`}
          >
            <span>{likesCount}</span>
            <LikeIcon className={cn(styles["article-card-likes-icon"])} />
          </div>
        </div>

        <h3 className={cn(styles["article-card-title"])}>
          <Link href={href} className={cn(styles["article-card-title-link"])}>
            {title}
          </Link>
        </h3>

        <p className={cn(styles["article-card-excerpt"])}>{excerpt}</p>

        <ArticleCardFooter readTime={readTime} href={href} />
      </div>
    </article>
  );
};
