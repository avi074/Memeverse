export default function MemeDetails({ params }: { params: { id: string } }) {
    return <h1 className="text-3xl font-bold">🖼 Meme ID: {params.id}</h1>;
  }
  