"use client";

import { useEffect, useState } from "react";
import { Like } from "../Like/Like";

interface PostResponse {
  id: number;
  liked?: boolean;
}

export default function Page(): JSX.Element {
  const POST_ID = 1;
  const STORAGE_KEY = `post-like-${POST_ID}`;
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const savedValue = localStorage.getItem(STORAGE_KEY);

    if (savedValue !== null) {
      setIsLiked(savedValue === "true");
    }
  }, []);

  const handleLikeClick = async (): Promise<void> => {
    const nextValue = !isLiked;

    setIsLiked(nextValue);
    localStorage.setItem(STORAGE_KEY, String(nextValue));
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${POST_ID}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            liked: nextValue,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Не удалось обновить лайк");
      }

      const data: PostResponse = await response.json();
      console.log("PATCH response:", data);
    } catch (error) {
      console.error(error);

      // откат состояния, если запрос не прошёл
      setIsLiked(!nextValue);
      localStorage.setItem(STORAGE_KEY, String(!nextValue));
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: "32px",
        padding: "24px",
        background: "#ffffff",
      }}
    >
      <Like isActive={isLiked} onClick={handleLikeClick} disabled={isLoading} />
    </main>
  );
}
