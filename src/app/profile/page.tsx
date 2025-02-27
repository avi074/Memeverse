"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Image from "next/image";

export default function Profile() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div>
      <h1 className="text-3xl font-bold">👤 {user.name}&apos;s Profile</h1>
      <p>{user.bio}</p>
      <Image src={user.profilePicture} alt={user.name} className="w-24 h-24 rounded-full mt-4" />
    </div>
  );
}
