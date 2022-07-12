
import { createRouter } from "./context";
import { z } from "zod";

export const beanRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.bean.findMany();
    },
  })
  .mutation("create", {
    input: z.object({
        country: z.string(),
        region: z.string().nullish(),
        process: z.string().nullish(),
        variety: z.string().nullish(),
        altitude: z.string().nullish(),
        roast: z.string().nullish()
    }),

    async resolve({ctx, input}) {
        return await ctx.prisma.bean.create({
            data: {
                country: input.country,
                region: input.region,
                process: input.process,
                variety: input.variety,
                altitude: input.altitude,
                roast: input.roast
            },
        })
    },
  })