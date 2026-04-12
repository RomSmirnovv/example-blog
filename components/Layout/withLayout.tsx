import { JSX } from "react";
import { Layout } from "./Layout";

type ServerComponent<T> = (props: T) => JSX.Element | Promise<JSX.Element>;

export const withLayout = <T extends Record<string, unknown>>(
  Component: ServerComponent<T>,
) => {
  return async function WithLayout(props: T): Promise<JSX.Element> {
    return <Layout>{await Component(props)}</Layout>;
  };
};
