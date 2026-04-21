"use client";

import { motion } from "framer-motion";
import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import styles from "./Page.module.css";
import { Post } from "@/types/post";

interface PageProps {
  posts: Post[];
  githubLink: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function Page({ posts }: PageProps): JSX.Element {
  return (
    <section className={styles["page"]}>
      <div className={styles["page-inner"]}>
        <div className={styles["page-head"]}>
          <span className={styles["page-kicker"]}>Статьи</span>
          <h1 className={styles["page-title"]}>Последние публикации</h1>
          <p className={styles["page-description"]}>
            Подборка заметок про front-end, CSS, React и Next.js.
          </p>
        </div>

        <motion.div
          className={styles["grid"]}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {posts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <ArticleCard
                title={post.title}
                excerpt={post.body}
                href={`/posts/${post.id}`}
                imageSrc="/images/article-preview.jpg"
                imageAlt={post.title}
                category={`User ${post.userId}`}
                publishedLabel="1 месяц назад"
                readTime="3 минуты"
                likesCount={post.id}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
