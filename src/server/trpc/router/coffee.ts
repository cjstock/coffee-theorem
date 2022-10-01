import { t } from "../trpc";
import { z } from "zod";
import {
    brewerModel,
    producerModel,
    roasterModel,
    sellerModel,
    coffeeModel,
} from "../../../../prisma/zod";

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
                    tastingNotes: true,
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
                    id: input.coffee.id,
                },
                create: {
                    origin: input.coffee.origin,
                    isFavorite: input.coffee.isFavorite,
                    process: input.coffee.process,
                    roast: input.coffee.roast,
                    altitude: input.coffee.altitude,
                    user: {
                        connect: {
                            id: input.coffee.userId,
                        },
                    },
                },
                update: {
                    origin: input.coffee.origin,
                    isFavorite: input.coffee.isFavorite,
                    process: input.coffee.process,
                    roast: input.coffee.roast,
                    altitude: input.coffee.altitude,
                    user: {
                        connect: {
                            id: input.coffee.userId,
                        },
                    },
                },
            });
        }),
    upsertSeller: t.procedure
        .input(z.object({ coffeeId: z.string(), seller: sellerModel }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.seller.upsert({
                where: {
                    id: input.seller.id,
                },
                create: {
                    name: input.seller.name,
                    url: input.seller.url,
                    info: input.seller.info,
                    address: input.seller.address,
                    isRoaster: input.seller.isRoaster,
                    coffee: {
                        connect: {
                            id: input.coffeeId,
                        },
                    },
                    coffeeId: input.coffeeId,
                },
                update: {
                    name: input.seller.name,
                    url: input.seller.url,
                    info: input.seller.info,
                    address: input.seller.address,
                    isRoaster: input.seller.isRoaster,
                },
            });
        }),
    upsertRoaster: t.procedure
        .input(z.object({ coffeeId: z.string(), roaster: roasterModel }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.roaster.upsert({
                where: {
                    id: input.roaster.id,
                },
                create: {
                    name: input.roaster.name,
                    url: input.roaster.url,
                    info: input.roaster.info,
                    address: input.roaster.address,
                    coffee: {
                        connect: {
                            id: input.coffeeId,
                        },
                    },
                    coffeeId: input.coffeeId,
                },
                update: {
                    name: input.roaster.name,
                    url: input.roaster.url,
                    info: input.roaster.info,
                    address: input.roaster.address,
                },
            });
        }),
    upsertProducer: t.procedure
        .input(z.object({ coffeeId: z.string(), producer: producerModel }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.producer.upsert({
                where: {
                    id: input.producer.id,
                },
                create: {
                    name: input.producer.name,
                    url: input.producer.url,
                    info: input.producer.info,
                    address: input.producer.address,
                    coffee: {
                        connect: {
                            id: input.coffeeId,
                        },
                    },
                    coffeeId: input.coffeeId,
                },
                update: {
                    url: input.producer.url,
                    info: input.producer.info,
                    address: input.producer.address,
                },
            });
        }),
    upsertBrewer: t.procedure
        .input(z.object({ coffeeId: z.string(), brewer: brewerModel }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.brewer.upsert({
                where: {
                    id: input.brewer.id,
                },
                create: {
                    name: input.brewer.name,
                    url: input.brewer.url,
                    info: input.brewer.info,
                    address: input.brewer.address,
                    tastingNotes: input.brewer.tastingNotes,
                    recipes: input.brewer.recipes,
                    coffee: {
                        connect: {
                            id: input.coffeeId,
                        },
                    },
                    coffeeId: input.coffeeId,
                },
                update: {
                    url: input.brewer.url,
                    info: input.brewer.info,
                    address: input.brewer.address,
                    tastingNotes: input.brewer.tastingNotes,
                    recipes: input.brewer.recipes,
                },
            });
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
