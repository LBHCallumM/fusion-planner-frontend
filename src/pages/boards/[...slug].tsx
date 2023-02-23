import Board from "@/features/board/Board";

// https://heroicons.com/

import { useRouter } from "next/router";

const BoardPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>{slug && <Board boardId={slug[0]} columnId={slug[2] || null} cardId={slug[3] || null} />}</>
  );
};

export const getServerSideProps = async (context) => {
  let { slug } = context.query;
  // If slug is "undefined", since "undefined" cannot be serialized, server will throw error
  // But null can be serializable
  if (!slug) {
    slug = null;
  }
  // now we are passing the slug to the component
  return { props: { slug: slug } };
};

export default BoardPage;

