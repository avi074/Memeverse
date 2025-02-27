import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function ProfileCard() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className="p-6 border rounded-lg bg-white dark:bg-gray-800">
      <div className="flex items-center space-x-4">
        <Image src={user.profilePicture} alt="Profile Picture" width={64} height={64} className="rounded-full" />
        <div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-500 dark:text-gray-300">{user.bio}</p>
        </div>
      </div>
    </div>
  );
}
