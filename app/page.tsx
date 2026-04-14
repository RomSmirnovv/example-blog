import { Metadata } from "next";
import Page from "@/components/Page/Page";
import { withLayout } from "@/components/Layout/withLayout";
import { Post } from "@/types/post";

export const metadata: Metadata = {
  title: "Мой блог",
  description: "Блог программиста",
};

interface HomeProps {
  githubLink: string;
}

async function getPosts(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error("Не удалось получить список постов");
  }

  return response.json();
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
