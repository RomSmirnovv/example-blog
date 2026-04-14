import { Metadata } from "next";
import Page from "@/components/Page/Page";
import { withLayout } from "@/components/Layout/withLayout";

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

interface HomeProps {
  githubLink: string;
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

async function getStaticData(): Promise<HomeProps> {
  return {
    githubLink: "https://github.com/RomSmirnovv",
  };
}

async function Home({ githubLink }: HomeProps): Promise<JSX.Element> {
  const posts = await getPosts();

  return <Page posts={posts} githubLink={githubLink} />;
}

async function HomeWithData(): Promise<JSX.Element> {
  const staticData = await getStaticData();

  return <Home {...staticData} />;
}

export default withLayout(HomeWithData);
