"use client";

import { useEffect, useState } from "react";
import MemeCard from "@/components/MemeCard";

export default function Leaderboard() {
  const [topMemes, setTopMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes?sort=likes")
      .then((res) => res.json())
      .then((data) => setTopMemes(data.data.memes.slice(0, 10)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">🏆 Meme Leaderboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {topMemes.map((meme) => (
          <MemeCard key={meme.id} meme={meme} />
        ))}
      </div>
    </div>
  );
}
