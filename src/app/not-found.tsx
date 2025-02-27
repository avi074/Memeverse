import Image from "next/image";

export default function NotFound() {
  return (
    <div className='flex flex-col gap-2 items-center'>
      <Image
        src='https://api.memegen.link/images/fry/error_404/page_not_found~q.png'
        alt='Page not found'
        loading='lazy'
        width={300}
        height={300}
      />
      <h1 className='text-5xl font-bold'>😵 404 - Page Not Found</h1>
      <p className='mt-4'>Oops! Looks like this meme doesn&apos;t exist.</p>
    </div>
  );
}
