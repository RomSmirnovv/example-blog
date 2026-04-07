import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Мой блог",
  description: "Блог программиста",
};

export default function Home() {
  return <h1>Blog</h1>;
}
