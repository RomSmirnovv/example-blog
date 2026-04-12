import Page from "@/components/Page/Page";
import { withLayout } from "@/components/Layout/withLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Мой блог",
  description: "Блог программиста",
};

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getPosts(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Не удалось получить список постов");
  }

  const posts: Post[] = await response.json();

  return posts;
}

async function Home(): Promise<JSX.Element> {
  const posts = await getPosts();

  return <Page posts={posts} />;
}

export default withLayout(Home);
