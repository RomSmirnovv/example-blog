import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import styles from "./Page.module.css";

const posts = [
  {
    id: 1,
    title: "Как работать с CSS Grid",
    excerpt:
      "Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы...",
    href: "#",
    imageSrc: "/images/article-preview.jpg",
    imageAlt: "Превью статьи",
    category: "Front-end",
    publishedLabel: "1 месяц назад",
    readTime: "3 минуты",
    likesCount: 4,
  },
  {
    id: 2,
    title: "Как работать с CSS Grid",
    excerpt:
      "Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы...",
    href: "#",
    imageSrc: "/images/article-preview.jpg",
    imageAlt: "Превью статьи",
    category: "Front-end",
    publishedLabel: "1 месяц назад",
    readTime: "3 минуты",
    likesCount: 4,
  },
  {
    id: 3,
    title: "Как работать с CSS Grid",
    excerpt:
      "Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы...",
    href: "#",
    imageSrc: "/images/article-preview.jpg",
    imageAlt: "Превью статьи",
    category: "Front-end",
    publishedLabel: "1 месяц назад",
    readTime: "3 минуты",
    likesCount: 4,
  },
];

export default function Page(): JSX.Element {
  return (
    <section className={styles["page"]}>
      <div className={styles["grid"]}>
        {posts.map((post) => (
          <ArticleCard
            key={post.id}
            title={post.title}
            excerpt={post.excerpt}
            href={post.href}
            imageSrc={post.imageSrc}
            imageAlt={post.imageAlt}
            category={post.category}
            publishedLabel={post.publishedLabel}
            readTime={post.readTime}
            likesCount={post.likesCount}
          />
        ))}
      </div>
    </section>
  );
}
