import PostContent from "../../../components/PostContent/PostContent";

export default function NoticiaPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <PostContent id={params.id} />
    </div>
  );
}
