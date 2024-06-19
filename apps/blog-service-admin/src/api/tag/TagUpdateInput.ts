import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";

export type TagUpdateInput = {
  blogPost?: BlogPostWhereUniqueInput | null;
  name?: string | null;
};
