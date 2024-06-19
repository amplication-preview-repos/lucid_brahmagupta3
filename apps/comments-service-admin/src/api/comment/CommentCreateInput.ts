import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentCreateInput = {
  text?: string | null;
  user?: UserWhereUniqueInput | null;
};
