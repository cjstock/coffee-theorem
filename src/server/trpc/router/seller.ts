import { authedProcedure, t } from "../trpc";
import { z } from "zod";
import { coffeeModel } from '../../../../prisma/zod/coffee';
import { sellerModel } from '../../../../prisma/zod/seller';

export const sellerRouter = t.router({
    getAll: authedProcedure
        .query(async ({ ctx }) => {
            return ctx.prisma.seller.findMany({})
        }),
    getAllFromCoffees: authedProcedure
        .input(z.object({ coffeeIds: z.array(z.string()).nullish() }))
        .query(async ({ ctx, input }) => {
            if (input.coffeeIds) {
                const coffees = await ctx.prisma.coffee.findMany({
                    where: {
                        id: {
                            in: input.coffeeIds
                        }
                    }
                })
                return await ctx.prisma.seller.findMany({
                    where: {
                        id: {
                            in: coffees.map(coffee => coffee.sellerId as string).filter(sellerId => sellerId !== null)
                        },
                    },
                });
            }
            return [];
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
