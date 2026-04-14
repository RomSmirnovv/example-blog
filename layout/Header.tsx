"use client";

import { useGithubContext } from "@/context/github.context";

export function Header(): JSX.Element {
  const { githubLink } = useGithubContext();

  return (
    <header>
      <div>
        <span>Мой блог</span>

        <a href={githubLink} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </header>
  );
}
