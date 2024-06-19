import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";

export type TagCreateInput = {
  blogPost?: BlogPostWhereUniqueInput | null;
  name?: string | null;
};
