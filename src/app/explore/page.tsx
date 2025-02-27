"use client";

import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";
import MemeCard from "@/components/MemeCard";
import Loader from "@/components/Loader";
import { fetchMemes } from "@/store/memeSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { Meme } from "@/types/meme";

export default function Explore() {
  const [displayedMemes, setDisplayedMemes] = useState<Meme[]>([]); // Memes shown initially
  const itemsToShow = 12; // Initial count
  const [hasMore, setHasMore] = useState(true);

  const { memes, loading, error } = useSelector(
    (state: RootState) => state.meme,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (memes.length == 0) {
      dispatch(fetchMemes());
    }else{
      setDisplayedMemes(memes.slice(0, itemsToShow))
    }

  }, [dispatch, memes]);

  const fetchMoreMemes = () => {
    if (displayedMemes.length >= memes.length) {
      setHasMore(false);
      return;
    }
    const nextBatch = memes.slice(0, displayedMemes.length + itemsToShow);
    setDisplayedMemes(nextBatch);
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p className='text-red-500'>{error}</p>}

      <div className='px-4'>
        <h1 className='text-3xl font-bold text-center mb-6'>
          🔍 Explore Memes
        </h1>

        <InfiniteScroll
          dataLength={displayedMemes.length}
          next={fetchMoreMemes}
          hasMore={hasMore}
          loader={<Loader />}>
          <Masonry
            breakpointCols={{ default: 3, 480: 2 }}
            className='flex gap-2'
            columnClassName='masonry-column'>
            {displayedMemes.map((meme) => (
              <MemeCard key={meme.id} meme={meme} onlyImg/>
            ))}
          </Masonry>
        </InfiniteScroll>
      </div>
    </>
  );
}
