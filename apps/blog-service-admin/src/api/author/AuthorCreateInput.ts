import { BlogPostCreateNestedManyWithoutAuthorsInput } from "./BlogPostCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  blogPosts?: BlogPostCreateNestedManyWithoutAuthorsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
};
