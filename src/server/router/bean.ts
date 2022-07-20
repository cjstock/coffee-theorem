
import { createRouter } from "./context";
import { z } from "zod";

export const beanRouter = createRouter()
  .query("getAll", {
    input: z.object({
      userId: z.string()
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.bean.findMany({
        where: {
          userId: input.userId
        }
      });
    },
  })
  .query("byId", {
    input: z.object({
      id: z.string()
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.bean.findUnique({
        where: {
          id: input.id
        }
      })
    }
  })
  .mutation("create", {
    input: z.object({
      country: z.string(),
      region: z.string().nullish(),
      process: z.string().nullish(),
      variety: z.string().nullish(),
      altitude: z.string().nullish(),
      roast: z.string().nullish(),
      userId: z.string(),

      sellerTastingNotes: z.string().nullish(),
      sellerBrewMethods: z.string().nullish(),
      sellerDescription: z.string().nullish(),
      sellerBuyLink: z.string().nullish(),

      myTastingNotes: z.string().nullish(),
      myBrewMethods: z.string().nullish(),
      myAddtionalNotes: z.string().nullish(),
      isFavorite: z.boolean().nullish()
    }),

    async resolve({ ctx, input }) {
      return await ctx.prisma.bean.create({
        data: {
          country: input.country,
          region: input.region,
          process: input.process,
          variety: input.variety,
          altitude: input.altitude,
          roast: input.roast,
          userId: input.userId,

          sellerTastingNotes: input.sellerTastingNotes,
          sellerBrewMethods: input.sellerBrewMethods,
          sellerDescription: input.sellerDescription,
          sellerBuyLink: input.sellerBuyLink,

          myTastingNotes: input.myTastingNotes,
          myBrewMethods: input.myBrewMethods,
          myAdditionalNotes: input.myAddtionalNotes,
          isFavorite: input.isFavorite
        },
      })
    },
  })