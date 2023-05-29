import { useEffect, useState } from "react";
import axios from "axios";

// Service to extract API logic // "./services/post.js"
const fetchPost = (postId) => {
  return axios.get(`https://api.com/post/${postId}`).then((response) => response.data)
};

// Custom hook to encapsulate state and loading management // "./hooks/use-post.js"
const usePost = () => {
  const [post, setPost] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchPost("123")
      .then((postData) => setPost(postData))
      .finally(() => setLoading(false));
  }, []);

  return { post, loading };
};

export default SingleResponsibilityPrinciple = () => {
  const { post, loading } = usePost();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Post:</h1>
      <p>{post}</p>
    </div>
  );
};
