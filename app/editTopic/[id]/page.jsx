import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/topics/${id}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching topic:", error); // Log error for debugging
    return { error: "Failed to fetch topic. Please try again later." }; // Return an error object
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
