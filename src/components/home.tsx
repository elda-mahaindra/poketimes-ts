import axios from "axios";
import React, { FunctionComponent, useEffect, useState } from "react";

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

const Home: FunctionComponent = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      setPosts((res.data as Post[]).slice(0, 10));
    });
  }, []);

  const postList = posts ? (
    posts.map(post => (
      <div className="post card" key={post.id}>
        <div className="card-content">
          <span className="card-title">{post.title}</span>
          <p>{post.body}</p>
        </div>
      </div>
    ))
  ) : (
    <div className="center">No posts yet.</div>
  );

  return (
    <div className="container">
      <h4 className="center">Home</h4>
      {postList}
    </div>
  );
};

export default Home;
