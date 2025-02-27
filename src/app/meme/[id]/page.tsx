export default async function MemeDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return <h1 className='text-3xl font-bold'>🖼 Meme ID: {id}</h1>;
}
