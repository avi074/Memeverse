import { Meme } from "@/types/meme";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface MemeCardProps {
  meme: Meme;
  onlyImg?: boolean;
}

export default function MemeCard({ meme, onlyImg }: MemeCardProps) {
  return (
    <Link href={`/meme/${meme.id}`} className='!mb-2 p-2'>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='border rounded-lg overflow-hidden shadow-lg mb-1'>
        <Image
          src={meme.url}
          alt={meme.name}
          width={meme.width > 500 ? 300 : meme.width}
          height={meme.height > 500 ? 300 : meme.height}
          loading='lazy'
          className="w-full"
        />
      </motion.div>
      {!onlyImg && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='text-center font-medium text-xl'>
          {meme.name}
        </motion.div>
      )}
    </Link>
  );
}
