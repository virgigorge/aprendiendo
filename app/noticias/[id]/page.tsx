import PostContent from "@/components/PostContent";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id;

  return (
    <div>
      <PostContent id={id} />
    </div>
  );
}