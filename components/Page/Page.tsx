import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import styles from "./Page.module.css";
import { Post } from "@/app/page";

interface PageProps {
  posts: Post[];
}

export default function Page({ posts }: PageProps): JSX.Element {
  return (
    <section className={styles["page"]}>
      <div className={styles["page-inner"]}>
        <div className={styles["page-head"]}>
          <span className={styles["page-kicker"]}>Статьи</span>
          <h1 className={styles["page-title"]}>Последние публикации</h1>
          <p className={styles["page-description"]}>
            Подборка заметок про front-end, CSS, React и Next.js. Данные для
            списка постов загружаются на сервере при открытии страницы.
          </p>
        </div>

        <div className={styles["grid"]}>
          {posts.map((post) => (
            <ArticleCard
              key={post.id}
              title={post.title}
              excerpt={post.body}
              href={`/#post-${post.id}`}
              imageSrc="/images/article-preview.jpg"
              imageAlt={post.title}
              category={`User ${post.userId}`}
              publishedLabel="Только что"
              readTime="5 минут"
              likesCount={post.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
