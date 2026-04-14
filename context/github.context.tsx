"use client";

import { createContext, useContext } from "react";

interface GithubContextValue {
  githubLink: string;
}

const GithubContext = createContext<GithubContextValue | null>(null);

interface GithubProviderProps {
  children: React.ReactNode;
  githubLink: string;
}

export function GithubProvider({
  children,
  githubLink,
}: GithubProviderProps): JSX.Element {
  return (
    <GithubContext.Provider value={{ githubLink }}>
      {children}
    </GithubContext.Provider>
  );
}

export function useGithubContext(): GithubContextValue {
  const context = useContext(GithubContext);

  if (!context) {
    throw new Error("useGithubContext must be used within GithubProvider");
  }

  return context;
}
