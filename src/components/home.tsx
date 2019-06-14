import axios from "axios";
import React, { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Pokeball from "../pokeball.png";

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

  const content = posts ? (
    posts.map(post => (
      <div className="post card" key={post.id}>
        <img src={Pokeball} alt="A pokeball" />
        <div className="card-content">
          <Link to={`/${post.id}`}>
            <span className="card-title red-text">{post.title}</span>
          </Link>
          <p>{post.body}</p>
        </div>
      </div>
    ))
  ) : (
    <div className="center">No posts yet.</div>
  );

  return (
    <div className="container home">
      <h4 className="center">Home</h4>
      {content}
    </div>
  );
};

export default Home;
