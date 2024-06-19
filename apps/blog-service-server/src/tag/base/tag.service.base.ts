/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Tag as PrismaTag,
  BlogPost as PrismaBlogPost,
} from "@prisma/client";

export class TagServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TagCountArgs, "select">): Promise<number> {
    return this.prisma.tag.count(args);
  }

  async tags(args: Prisma.TagFindManyArgs): Promise<PrismaTag[]> {
    return this.prisma.tag.findMany(args);
  }
  async tag(args: Prisma.TagFindUniqueArgs): Promise<PrismaTag | null> {
    return this.prisma.tag.findUnique(args);
  }
  async createTag(args: Prisma.TagCreateArgs): Promise<PrismaTag> {
    return this.prisma.tag.create(args);
  }
  async updateTag(args: Prisma.TagUpdateArgs): Promise<PrismaTag> {
    return this.prisma.tag.update(args);
  }
  async deleteTag(args: Prisma.TagDeleteArgs): Promise<PrismaTag> {
    return this.prisma.tag.delete(args);
  }

  async getBlogPost(parentId: string): Promise<PrismaBlogPost | null> {
    return this.prisma.tag
      .findUnique({
        where: { id: parentId },
      })
      .blogPost();
  }
}
