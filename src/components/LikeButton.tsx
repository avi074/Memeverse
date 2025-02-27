"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { toggleLikeMeme } from "@/store/userSlice";

interface LikeButtonProps {
  memeId: string;
}

export default function LikeButton({ memeId }: LikeButtonProps) {
  const dispatch = useDispatch<AppDispatch>();
  const likedMemes = useSelector((state: RootState) => state.user.likedMemes);
  const isLiked = likedMemes.includes(memeId);

  return (
    <button
      onClick={() => dispatch(toggleLikeMeme(memeId))}
      className={`p-2 rounded-md transition ${
        isLiked ? "bg-red-500 text-white" : "bg-gray-300 text-black"
      }`}
    >
      {isLiked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
}
