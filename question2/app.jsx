import { useState, useEffect } from "react";

function App() {
  let [posts, setPosts]     = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError]     = useState("");

  useEffect(() => {
    async function fetchPosts() {
      try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
          throw new Error("Failed to fetch data!");
        }

        let data = await response.json();
        setPosts(data.slice(0, 10)); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []); 

  
  if (loading) return <p>Loading...</p>;


  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

 
  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Posts from API</h1>
      {posts.map(post => (
        <div key={post.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px", borderRadius: "8px" }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
