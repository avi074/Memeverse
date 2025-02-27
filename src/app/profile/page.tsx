"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function Profile() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div>
      <h1 className="text-3xl font-bold">👤 {user.name}'s Profile</h1>
      <p>{user.bio}</p>
      <img src={user.profilePicture} className="w-24 h-24 rounded-full mt-4" />
    </div>
  );
}
