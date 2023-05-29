import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  return response.json();
};

// Instead of using directly a dependency, you should abstract it.
export default DependencyInversionPrinciple = () => {
  const { data: post } = useSWR("https://api.com/post/123", fetcher);

  if (!post) return <p>Empty post</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </div>
  );
};
