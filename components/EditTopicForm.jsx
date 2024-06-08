"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const EditTopicForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/topics/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            newTitle,
            newDescription,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to uppdate");
      }
      
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Error updating topic:", error); // Log error for debugging
      return { error: "Failed to update topic. Please try again later." }; // Return an error object
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2 focus:outline-none"
        type="text"
      />
      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 px-8 py-2 focus:outline-none"
        type="text"
      />

      <button
        type="submit"
        className="bg-green-600 py-3 px-6 w-fit font-bold text-white rounded-sm"
      >
        Update Topic
      </button>
    </form>
  );
};

export default EditTopicForm;
