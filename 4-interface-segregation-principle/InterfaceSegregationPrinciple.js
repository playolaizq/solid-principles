import { useEffect, useState } from "react";
import axios from "axios";

const PostTitle = ({ title }) => {
  return (
    <h1>
      {title}
    </h1>
  );
};

const PostDescription = ({ description }) => {
  return (
    <p>
      {description}
    </p>
  );
};

// Instead of sending the entire "post", just send the required data to each component.
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
      <PostTitle title={post.title} />
      <PostDescription description={post.description} />
    </div>
  );
};
