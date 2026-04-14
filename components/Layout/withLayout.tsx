import { JSX } from "react";
import { Layout } from "./Layout";
import { GithubProvider } from "@/context/github.context";

type ServerComponent<T> = (props: T) => JSX.Element | Promise<JSX.Element>;

interface WithLayoutProps {
  githubLink: string;
}

export const withLayout = <T extends Record<string, unknown>>(
  Component: ServerComponent<T>,
) => {
  return async function WithLayout(
    props: T & WithLayoutProps,
  ): Promise<JSX.Element> {
    const { githubLink, ...restProps } = props;

    return (
      <GithubProvider githubLink={githubLink}>
        <Layout>{await Component(restProps as T)}</Layout>
      </GithubProvider>
    );
  };
};
