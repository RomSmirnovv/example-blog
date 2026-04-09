import { Button, Htag, Rating } from "@/components";
import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import { Like } from "@/components/Like/Like";
import { P } from "@/components/P/P";
import Page from "@/components/Page/Page";
import { Tag } from "@/components/Tag/Tag";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Мой блог",
  description: "Блог программиста",
};

export default function Home() {
  return <Page />;
}
