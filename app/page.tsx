import { Button, Htag } from "@/components";
import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import { P } from "@/components/P/P";
import { Tag } from "@/components/Tag/Tag";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Мой блог",
  description: "Блог программиста",
};

export default function Home() {
  return (
    <div>
      <ArticleCard
        title="Как я сделал свой первый сайт"
        excerpt="В этом посте я расскажу как я сделал свой первый сайт"
        href="#"
        imageSrc="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        imageAlt="Картинка"
        category="Frontend"
        publishedLabel="21 июня 2023"
        readTime="5 мин"
      />
    </div>
  );
}
