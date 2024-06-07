import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null; // Return null in case of error
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const topicData = await getTopicById(id);

  if (!topicData) {
    // Handle the case when topic data is not available or malformed
    return <div>Topic not found</div>;
  }

  const { title, description } = topicData;

  return <EditTopicForm id={id} title={title} description={description} />;
}
