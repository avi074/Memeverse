"use client";

import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMemes } from "@/store/memeSlice";
import { RootState, AppDispatch } from "@/store/store";
import MemeCard from "@/components/MemeCard";
import Masonry from "react-masonry-css";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { memes, loading, error } = useSelector(
    (state: RootState) => state.meme,
  );

  const randomMemes = useMemo(() => {
    return memes
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
  }, [memes]);

  useEffect(() => {
    dispatch(fetchMemes());
  }, [dispatch]);

  return (
    <div className="w-full overflow-hidden">
      <h1 className='text-3xl font-bold'>🔥 Trending Memes</h1>

      {loading && <p>Loading...</p>}
      {error && <p className='text-red-500'>{error}</p>}

      <Masonry
        breakpointCols={{ default: 3, 480: 2 }}
        className='flex gap-4'
        columnClassName='masonry-column'>
        {randomMemes.map((meme) => (
          <MemeCard key={meme.id} meme={meme} />
        ))}
      </Masonry>
    </div>
  );
}
