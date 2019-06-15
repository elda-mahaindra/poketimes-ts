export interface PostModel {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostStateModel {
  posts: PostModel[];
}

export const POPULATE_POSTS = "POPULATE_POSTS";
export const DELETE_POST = "DELETE_POST";

interface DeletePostActionModel {
  type: typeof DELETE_POST;
  id: number;
}

export type PostActionModel = DeletePostActionModel;
//the type that exported is a union of action interfaces.
//so if there are other action interfaces, I should write it like below:
// export type PostActionModel = DeletePostActionModel | PopulatePostActionModel;
