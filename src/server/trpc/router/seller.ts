import { authedProcedure, t } from "../trpc";
import { z } from "zod";
import { coffeeModel } from '../../../../prisma/zod/coffee';
import { sellerModel } from '../../../../prisma/zod/seller';

export const sellerRouter = t.router({
    getAll: authedProcedure
        .input(z.object({ coffees: z.array(coffeeModel).nullish() }))
        .query(async ({ ctx, input }) => {
            if (input.coffees) {
                return await ctx.prisma.seller.findMany({
                    where: {
                        id: {
                            in: input.coffees.map(coffee => coffee.sellerId as string).filter(sellerId => sellerId !== null)
                        },
                    },
                });
            }
            return await ctx.prisma.seller.findMany({})
        }),
    byId: t.procedure
        .input(z.object({ sellerId: z.string().nullish() }))
        .query(({ ctx, input }) => {
            return ctx.prisma.seller.findUnique({
                where: {
                    id: input.sellerId || undefined,
                },
            });
        }),
    upsertSeller: t.procedure
        .input(z.object({ seller: sellerModel, coffee: coffeeModel }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.seller.upsert({
                where: {
                    id: input.seller.id
                },
                create: {
                    ...input.seller,
                    coffees: {
                        createMany: {
                            data: [input.coffee]
                        }
                    }
                },
                update: {
                    ...input.seller,
                    coffees: {
                        createMany: {
                            data: [input.coffee]
                        }
                    }
                }
            })
        }),
    deleteSeller: t.procedure
        .input(z.object({ sellerId: z.string() }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.seller.delete({
                where: {
                    id: input.sellerId,
                },
            });
        }),
});
