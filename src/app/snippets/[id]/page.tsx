import { notFound } from "../../../../node_modules/next/navigation";
import { db } from "@/db";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnipperShowPage(props: SnippetShowPageProps) {
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id),
    },
  });

  if (!snippet) {
    return notFound();
  }
  return <div>{snippet.title}</div>;
}
