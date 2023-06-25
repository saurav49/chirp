import { createTRPCRouter, publicProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    console.log({ ctx });
    return ctx.prisma.post.findMany();
  }),
});
