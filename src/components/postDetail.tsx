import React, { FunctionComponent } from "react";
import { connect } from "react-redux";

import { deletePostAction } from "../store/post/actions";

import {
  PostModel,
  PostActionModel,
  PostStateModel
} from "../store/post/types";

interface PostProps {
  match: { params: { post_id: string } };
  history: string[];
  post: PostModel | undefined;
  deletePost: (id: number) => void;
}

const PostDetail: FunctionComponent<PostProps> = ({
  history,
  post,
  deletePost
}) => {
  const handleClick = () => {
    if (post) {
      deletePost(post.id);
      history.push("/");
    }
  };

  const content = post ? (
    <div className="post">
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <div className="center">
        <button className="btn grey" onClick={handleClick}>
          Delete Post
        </button>
      </div>
    </div>
  ) : (
    <div className="center">Loading post...</div>
  );

  return <div className="container">{content}</div>;
};

const mapStateToProps = (state: PostStateModel, ownProps: PostProps) => {
  const { post_id } = ownProps.match.params;

  return {
    post: state.posts.find(post => post.id === parseInt(post_id))
  };
};

const mapDispatchToProps = (dispatch: (action: PostActionModel) => void) => {
  return {
    deletePost: (id: number) => {
      dispatch(deletePostAction(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
