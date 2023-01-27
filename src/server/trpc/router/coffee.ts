import { t } from "../trpc";
import { z } from "zod";
import { relatedCoffeeModel, coffeeModel } from '../../../../prisma/zod/coffee';

export const coffeeRouter = t.router({
    getAll: t.procedure
        .input(z.object({ userId: z.string() }))
        .query(({ ctx, input }) => {
            return ctx.prisma.coffee.findMany({
                where: {
                    userId: input.userId,
                },
                select: {
                    id: true,
                    isFavorite: true,
                    origin: true,
                    process: true,
                    roast: true
                },
            });
        }),
    byId: t.procedure
        .input(z.object({ coffeeId: z.string() }))
        .query(({ ctx, input }) => {
            return ctx.prisma.coffee.findUnique({
                where: {
                    id: input.coffeeId,
                },
            });
        }),
    upsertCoffee: t.procedure
        .input(z.object({ coffee: coffeeModel }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.coffee.upsert({
                where: {
                    id: input.coffee.id
                },
                create: {
                    origin: input.coffee.origin,
                    isFavorite: input.coffee.isFavorite,
                    altitude: input.coffee.altitude,
                    process: input.coffee.process,
                    roast: input.coffee.roast,
                    userId: input.coffee.userId
                },
                update: {
                    origin: input.coffee.origin,
                    isFavorite: input.coffee.isFavorite,
                    altitude: input.coffee.altitude,
                    process: input.coffee.process,
                    roast: input.coffee.roast,
                    userId: input.coffee.userId
                }
            })
        }),
    deleteCoffee: t.procedure
        .input(z.object({ coffeeId: z.string() }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.coffee.delete({
                where: {
                    id: input.coffeeId,
                },
            });
        }),
});
