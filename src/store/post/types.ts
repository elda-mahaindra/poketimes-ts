export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostState {
  posts: Post[];
}

export const POPULATE_POSTS = "POPULATE_POSTS";
export const GET_POST = "GET_POST";

interface populatePostsAction {
  type: typeof POPULATE_POSTS;
}

interface getPostAction {
  type: typeof GET_POST;
  id: number;
}

export type PostAction = populatePostsAction | getPostAction;
