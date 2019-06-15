import { PostActionModel, DELETE_POST } from "./types";

export const deletePostAction = (id: number): PostActionModel => {
  return {
    type: DELETE_POST,
    id
  };
};
