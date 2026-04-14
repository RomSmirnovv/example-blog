import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { withLayout } from "@/components/Layout/withLayout";
import { Post } from "@/types/post";
import styles from "./PostPage.module.css";

interface PageProps {
  params: Promise<{ id: string }>;
}

interface HomeProps {
  githubLink: string;
}

async function getAllPosts(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error("Не удалось получить список постов");
  }

  return response.json();
}

async function getPost(id: string): Promise<Post | null> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: { revalidate: 3600 },
    },
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Не удалось получить пост");
  }

  return response.json();
}

export async function generateStaticParams(): Promise<Array<{ id: string }>> {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: String(post.id),
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    return {
      title: "Пост не найден",
    };
  }

  return {
    title: post.title,
    description: post.body.slice(0, 140),
  };
}

async function getStaticData(): Promise<HomeProps> {
  return {
    githubLink: "https://github.com/RomSmirnovv",
  };
}

async function PostDetail({ params }: PageProps): Promise<JSX.Element> {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <article className={styles["post-page"]}>
      <div className={styles["post-header"]}>
        <h1 className={styles["post-title"]}>{post.title}</h1>

        <div className={styles["post-meta"]}>
          <span>Front-end</span>
          <span>•</span>
          <span>1 месяц назад</span>
          <span>•</span>
          <span>3 минуты</span>
          <span>•</span>
          <span>{post.id}</span>
        </div>
      </div>

      <div className={styles["post-cover"]}>
        <Image
          src="/images/article-preview.jpg"
          alt={post.title}
          fill
          className={styles["post-cover-image"]}
          sizes="(max-width: 768px) 100vw, 720px"
          priority
        />
      </div>

      <div className={styles["post-content"]}>
        <p>{post.body}</p>

        <p>
          Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему
          сеток в CSS. Гриды подойдут и для верстки основных областей страницы,
          и для небольших элементов пользовательского интерфейса.
        </p>

        <h2>Что такое грид?</h2>

        <p>
          Грид представляет собой пересекающийся набор горизонтальных и
          вертикальных линий, образующих колонки и строки. Элементы могут быть
          помещены в грид в пределах линий этих колонок и строк.
        </p>
      </div>

      <div className={styles["post-like-row"]}>
        <span>Понравилось? Жми</span>

        <button type="button" className={styles["like-button"]}>
          👍
        </button>
      </div>

      <section className={styles["comments"]}>
        <h2 className={styles["comments-title"]}>Комментарии</h2>

        <div className={styles["comment-item"]}>
          <div className={styles["comment-author-row"]}>
            <strong>Василий Пупкин</strong>
            <span>•</span>
            <span>pupkin@gmail.com</span>
          </div>

          <p className={styles["comment-text"]}>
            Отличная статья, но не хватает информации о том, как лучше
            реализовать на гридах более сложные конструкции.
          </p>
        </div>

        <form className={styles["comment-form"]}>
          <input
            type="text"
            placeholder="Имя"
            className={styles["comment-input"]}
          />

          <textarea
            placeholder="Комментарий"
            className={styles["comment-textarea"]}
            rows={5}
          />

          <button type="submit" className={styles["comment-submit"]}>
            Отправить
          </button>
        </form>
      </section>

      <div className={styles["back-link-row"]}>
        <Link href="/">← Назад к списку постов</Link>
      </div>
    </article>
  );
}

async function PostDetailWithData(props: PageProps): Promise<JSX.Element> {
  await getStaticData();
  return <PostDetail {...props} />;
}

export default withLayout(PostDetailWithData);
