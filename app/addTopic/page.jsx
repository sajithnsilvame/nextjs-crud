"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddTopic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title and Description are required");
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/topics`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });
      if (response.ok) { 
        router.push("/");
        router.refresh();
      }
      else {
        throw new Error("Something went wrong");
      }
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2 focus:outline-none"
        type="text"
        placeholder="Topic title"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2 focus:outline-none"
        type="text"
        placeholder="Topic description"
      />

      <button
        type="submit"
        className="bg-green-600 py-3 px-6 w-fit font-bold text-white rounded-sm"
      >
        Add Topic
      </button>
    </form>
  );
};

export default AddTopic;
