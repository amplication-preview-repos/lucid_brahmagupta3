import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TagWhereInput = {
  blogPost?: BlogPostWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
