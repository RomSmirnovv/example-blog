export interface ArticleCardProps {
  title: string;
  excerpt: string;
  href: string;
  imageSrc: string;
  imageAlt?: string;
  category: string;
  publishedLabel: string;
  readTime: string;
  likesCount?: number;
  className?: string;
}
