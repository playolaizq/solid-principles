import { useEffect, useState } from "react";
import axios from "axios";

export default SingleResponsibilityPrinciple = () => {
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
      <p>{post}</p>
    </div>
  );
};
