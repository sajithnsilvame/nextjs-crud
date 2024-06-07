"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
const RemoveBtn = ({ id }) => {
  const router = useRouter();
  const removeTopic = async () => {
    const isConfirmed = confirm("Are you sure you want to remove");
    if (isConfirmed) {
      const response = await fetch(
        `http://localhost:3000/api/topics?id=${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button className="text-red-500" onClick={removeTopic}>
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveBtn;
