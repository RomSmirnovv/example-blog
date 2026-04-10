import Page from "@/components/Page/Page";
import { withLayout } from "@/components/Layout/withLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Мой блог",
  description: "Блог программиста",
};

function Home(): JSX.Element {
  return <Page />;
}

export default withLayout(Home);
