/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BlogPostService } from "../blogPost.service";
import { BlogPostCreateInput } from "./BlogPostCreateInput";
import { BlogPost } from "./BlogPost";
import { BlogPostFindManyArgs } from "./BlogPostFindManyArgs";
import { BlogPostWhereUniqueInput } from "./BlogPostWhereUniqueInput";
import { BlogPostUpdateInput } from "./BlogPostUpdateInput";
import { TagFindManyArgs } from "../../tag/base/TagFindManyArgs";
import { Tag } from "../../tag/base/Tag";
import { TagWhereUniqueInput } from "../../tag/base/TagWhereUniqueInput";

export class BlogPostControllerBase {
  constructor(protected readonly service: BlogPostService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BlogPost })
  async createBlogPost(
    @common.Body() data: BlogPostCreateInput
  ): Promise<BlogPost> {
    return await this.service.createBlogPost({
      data: {
        ...data,

        author: data.author
          ? {
              connect: data.author,
            }
          : undefined,

        category: data.category
          ? {
              connect: data.category,
            }
          : undefined,
      },
      select: {
        author: {
          select: {
            id: true,
          },
        },

        category: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,
        id: true,
        published: true,
        publishedAt: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [BlogPost] })
  @ApiNestedQuery(BlogPostFindManyArgs)
  async blogPosts(@common.Req() request: Request): Promise<BlogPost[]> {
    const args = plainToClass(BlogPostFindManyArgs, request.query);
    return this.service.blogPosts({
      ...args,
      select: {
        author: {
          select: {
            id: true,
          },
        },

        category: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,
        id: true,
        published: true,
        publishedAt: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BlogPost })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async blogPost(
    @common.Param() params: BlogPostWhereUniqueInput
  ): Promise<BlogPost | null> {
    const result = await this.service.blogPost({
      where: params,
      select: {
        author: {
          select: {
            id: true,
          },
        },

        category: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,
        id: true,
        published: true,
        publishedAt: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: BlogPost })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBlogPost(
    @common.Param() params: BlogPostWhereUniqueInput,
    @common.Body() data: BlogPostUpdateInput
  ): Promise<BlogPost | null> {
    try {
      return await this.service.updateBlogPost({
        where: params,
        data: {
          ...data,

          author: data.author
            ? {
                connect: data.author,
              }
            : undefined,

          category: data.category
            ? {
                connect: data.category,
              }
            : undefined,
        },
        select: {
          author: {
            select: {
              id: true,
            },
          },

          category: {
            select: {
              id: true,
            },
          },

          content: true,
          createdAt: true,
          id: true,
          published: true,
          publishedAt: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: BlogPost })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBlogPost(
    @common.Param() params: BlogPostWhereUniqueInput
  ): Promise<BlogPost | null> {
    try {
      return await this.service.deleteBlogPost({
        where: params,
        select: {
          author: {
            select: {
              id: true,
            },
          },

          category: {
            select: {
              id: true,
            },
          },

          content: true,
          createdAt: true,
          id: true,
          published: true,
          publishedAt: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/tags")
  @ApiNestedQuery(TagFindManyArgs)
  async findTags(
    @common.Req() request: Request,
    @common.Param() params: BlogPostWhereUniqueInput
  ): Promise<Tag[]> {
    const query = plainToClass(TagFindManyArgs, request.query);
    const results = await this.service.findTags(params.id, {
      ...query,
      select: {
        blogPost: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/tags")
  async connectTags(
    @common.Param() params: BlogPostWhereUniqueInput,
    @common.Body() body: TagWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tags: {
        connect: body,
      },
    };
    await this.service.updateBlogPost({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/tags")
  async updateTags(
    @common.Param() params: BlogPostWhereUniqueInput,
    @common.Body() body: TagWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tags: {
        set: body,
      },
    };
    await this.service.updateBlogPost({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/tags")
  async disconnectTags(
    @common.Param() params: BlogPostWhereUniqueInput,
    @common.Body() body: TagWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tags: {
        disconnect: body,
      },
    };
    await this.service.updateBlogPost({
      where: params,
      data,
      select: { id: true },
    });
  }
}
