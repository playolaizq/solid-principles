import { useEffect, useState } from "react";
import axios from "axios";

const PostTitle = ({ post }) => {
  return (
    <h1>
      {post.title}
    </h1>
  );
};

const PostDescription = ({ post }) => {
  return (
    <p>
      {post.description}
    </p>
  );
};

// Besides breaking Single Responsibility Principle,
// it pass down the entire "post" into each component, but it doesn't need all the data.
export default InterfaceSegregationPrinciple = () => {
  const [post, setPost] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("https://api.com/post/123")
      .then((response) => setPost(response.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Post:</h1>
      <PostTitle post={post} />
      <PostDescription post={post} />
    </div>
  );
};
