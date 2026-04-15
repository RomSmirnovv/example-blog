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

function buildPostHtml(post: Post): string {
  return `
    <p>${post.body}</p>
    <p>
      Grid Layout — это двумерная система раскладки, которая помогает удобно
      строить как общую структуру страницы, так и отдельные интерфейсные блоки.
    </p>
    <h2>Что такое CSS Grid</h2>
    <p>
      По сути это сетка из строк и колонок, внутри которой можно точно размещать
      элементы и управлять их размерами.
    </p>
    <blockquote>
      Grid особенно удобен там, где нужно контролировать и строки, и колонки одновременно.
    </blockquote>
    <p>
      Поэтому гриды часто используют в карточках, страницах статей, дашбордах и
      сложных адаптивных макетах.
    </p>
  `;
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

  const post: Post = await response.json();

  return {
    ...post,
    html: buildPostHtml(post),
  };
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
          <span>Пост #{post.id}</span>
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

      <div
        className={styles["post-content"]}
        dangerouslySetInnerHTML={{ __html: post.html ?? `<p>${post.body}</p>` }}
      />

      <div className={styles["post-like-row"]}>
        <span>Понравилось? Жми</span>

        <button type="button" className={styles["like-button"]}>
          👍
        </button>
      </div>

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
