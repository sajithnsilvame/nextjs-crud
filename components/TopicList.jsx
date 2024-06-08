import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import {HiPencilAlt} from "react-icons/hi"

const getTopics = async () =>{
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/topics`);

    if(!response.ok){
      throw new Error(response.statusText);
    }

    return response.json();

  }
  catch(error){
    console.error("Error fetching topics:", error); // Log error for debugging
    return { error: "Failed to fetch topics. Please try again later." }; // Return an error object
  }
}

const TopicList = async () => {
  const {topics} = await getTopics();
  return (
    <>
      {topics.map((topic) => (
        <div
          key={topic._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="text-2xl font-bold">{topic.title}</h2>
            <div>{topic.description}</div>
          </div>
          <div className="flex gap-2">
            <RemoveBtn id={topic._id} />
            <Link href={`/editTopic/${topic._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default TopicList
