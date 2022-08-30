import { createRouter } from "./context";

export const varietyRouter = createRouter().query("getAll", {
  async resolve({ ctx }) {
    return await ctx.prisma.variety.findMany({});
  },
});
