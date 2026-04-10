import { ComponentType } from "react";
import { Layout } from "./Layout";

export const withLayout = <T extends Record<string, unknown>>(
  Component: ComponentType<T>,
) => {
  return function WithLayout(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
