import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Post, PostState } from "../store/post/types";

import Pokeball from "../pokeball.png";

interface HomeProps {
  posts: Post[];
}

const Home: FunctionComponent<HomeProps> = ({ posts }) => {
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

const mapStateToProps = (state: PostState) => ({
  posts: state.posts
});

export default connect(mapStateToProps)(Home);
