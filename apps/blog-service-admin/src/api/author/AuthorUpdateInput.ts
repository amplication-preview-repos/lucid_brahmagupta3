import { BlogPostUpdateManyWithoutAuthorsInput } from "./BlogPostUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  blogPosts?: BlogPostUpdateManyWithoutAuthorsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
};
