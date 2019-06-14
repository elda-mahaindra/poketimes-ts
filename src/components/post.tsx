import React, { FunctionComponent } from "react";
import { connect } from "react-redux";

import { Post as PostInterface, PostState } from "../store/post/types";

interface PostProps {
  match: { params: { post_id: string } };
  post: PostInterface | undefined;
}

const Post: FunctionComponent<PostProps> = props => {
  const { post } = props;
  console.log(props);

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

const mapStateToProps = (state: PostState, ownProps: PostProps) => {
  const { post_id } = ownProps.match.params;

  return {
    post: state.posts.find(post => post.id === parseInt(post_id))
  };
};

export default connect(mapStateToProps)(Post);
