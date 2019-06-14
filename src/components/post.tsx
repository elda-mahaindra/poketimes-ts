import axios from "axios";
import React, { FunctionComponent, useEffect, useState } from "react";

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

type Params = {
  post_id: number;
};

type Match = {
  params: Params;
};

type PostProps = {
  match: Match;
};

const Post: FunctionComponent<PostProps> = props => {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    console.log("use EFFECTS RUN");
    const { post_id } = props.match.params;

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
      .then(res => {
        setPost(res.data as Post);
      });
  }, [props.match.params]);

  const content = post ? (
    <div className="post">
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  ) : (
    <div className="center">Loading post...</div>
  );

  return <div className="container">{content}</div>;
};

export default Post;
