import useSWR from "swr";

// Abstraction hook --> ./hooks/use-data.js
const useData = ({ key, fetcher }) => {
  const { data, error, isValidating } = useSWR(key, fetcher);
  return { data, error, isValidating };
};

const fetcher1 = async () => {
  const url = "https://api.com/post/123";
  const response = await fetch(url);
  return response.json();
};

const fetcher2 = () => {
  const post = localStorage.getItem("post");
  return post ? JSON.parse(post) : null;
}

// You can extract SWR logic into an abstraction in a different file.
// If you match the abstraction contract, then it will work.
// You can fetch data from an API (fetcher1) or from local storage (fetcher2), and the abstraction will work anyways.
export default DependencyInversionPrinciple = () => {
  const { data: post } = useData({ key: "/post", fetcher: fetcher1 });

  if (!post) return <p>Empty post</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </div>
  );
};
