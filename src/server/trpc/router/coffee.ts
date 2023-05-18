import { t, authedProcedure } from '../trpc';
import { z } from "zod";
import { coffeeModel } from '../../../../prisma/zod/coffee';
import { sellerModel } from '../../../../prisma/zod/seller';
import { roasterModel } from '../../../../prisma/zod/roaster';
import { producerModel } from '../../../../prisma/zod/producer';
import { tastingNoteModel } from 'prisma/zod';

export const coffeeRouter = t.router({
    getAll: authedProcedure
        .query(async ({ ctx }) => {
            return await ctx.prisma.coffee.findMany({
                where: {
                    userId: ctx.session.user.id
                },
                include: {
                    coffeeTastingNotes: true,
                    seller: true,
                    roaster: true,
                    producer: true
                }
            });
        }),
    byId: authedProcedure
        .input(z.object({ coffeeId: z.string() }))
        .query(async ({ ctx, input }) => {
            return await ctx.prisma.coffee.findUnique({
                where: {
                    id: input.coffeeId,
                },
                include: {
                    coffeeTastingNotes: true,
                    seller: true,
                    roaster: true,
                    producer: true,
                }
            });
        }),
    upsert: authedProcedure
        .input(z.object({ coffee: coffeeModel, seller: sellerModel.nullable(), roaster: roasterModel.nullable(), producer: producerModel.nullable(), tastingNotes: z.array(tastingNoteModel) }))
        .mutation(async ({ ctx, input }) => {
            const coffee = await ctx.prisma.coffee.upsert({
                where: {
                    id: input.coffee.id
                },
                update: {
                    isFavorite: input.coffee.isFavorite,
                    origin: input.coffee.origin,
                    altitude: input.coffee.altitude,
                    process: input.coffee.process,
                    variety: input.coffee.variety,
                    userId: ctx.session.user.id,
                    roast: input.coffee.roast,
                    sellerId: input.seller?.id
                },
                create: {
                    isFavorite: input.coffee.isFavorite,
                    origin: input.coffee.origin,
                    altitude: input.coffee.altitude,
                    process: input.coffee.process,
                    variety: input.coffee.variety,
                    userId: ctx.session.user.id,
                    roast: input.coffee.roast
                },
            });
            const seller = !!input.seller ? await ctx.prisma.seller.upsert({
                where: {
                    id: input.seller.id
                },
                update: {
                    name: input.seller.name,
                    location: input.seller.location,
                    isRoaster: input.seller.isRoaster,
                    info: input.seller.info,
                    url: input.seller.url,
                    coffees: {
                        connect: {
                            id: coffee.id
                        }
                    }
                },
                create: {
                    name: input.seller.name,
                    location: input.seller.location,
                    isRoaster: input.seller.isRoaster,
                    info: input.seller.info,
                    url: input.seller.url,
                    coffees: {
                        connect: {
                            id: coffee.id
                        }
                    }
                },
            }) : null;
            const roaster = !!input.roaster ? await ctx.prisma.roaster.upsert({
                where: {
                    id: input.roaster.id
                },
                update: {
                    name: input.roaster.name,
                    location: input.roaster.location,
                    info: input.roaster.info,
                    url: input.roaster.url,
                },
                create: {
                    name: input.roaster.name,
                    location: input.roaster.location,
                    info: input.roaster.info,
                    url: input.roaster.url,
                    coffees: {
                        connect: {
                            id: coffee.id
                        }
                    }
                },
            }) : null;
            const producer = !!input.producer ? await ctx.prisma.producer.upsert({
                where: {
                    id: input.producer.id
                },
                update: {
                    name: input.producer.name,
                    location: input.producer.location,
                    info: input.producer.info,
                    url: input.producer.url,
                },
                create: {
                    name: input.producer.name,
                    location: input.producer.location,
                    info: input.producer.info,
                    url: input.producer.url,
                    coffees: {
                        connect: {
                            id: coffee.id
                        }
                    }
                },
            }) : null;
            const coffeeTastingNotes = await ctx.prisma.coffeeTastingNote.createMany({
                data: input.tastingNotes.map(tastingNote => {
                    return {
                        coffeeId: coffee.id,
                        tastingNoteId: tastingNote.id,
                    }
                }),
                skipDuplicates: true
            })
            return {
                coffee,
                seller,
                roaster,
                producer,
                coffeeTastingNotes
            }
        }),
    add: authedProcedure
        .input(z.object({ coffee: coffeeModel, seller: sellerModel.nullish(), roaster: roasterModel.nullish(), producer: producerModel.nullish() }))
        .mutation(async ({ ctx, input }) => {
            const coffee = await ctx.prisma.coffee.create({
                data: {
                    isFavorite: input.coffee.isFavorite,
                    origin: input.coffee.origin,
                    altitude: input.coffee.altitude,
                    process: input.coffee.process,
                    variety: input.coffee.variety,
                    userId: ctx.session.user.id,
                    roast: input.coffee.roast
                },
            });
            input.seller && await ctx.prisma.seller.create({
                data: {
                    name: input.seller.name,
                    location: input.seller.location,
                    isRoaster: input.seller.isRoaster,
                    info: input.seller.info,
                    url: input.seller.url,
                    coffees: {
                        connect: {
                            id: coffee.id
                        }
                    }
                },
            });
            input.roaster && await ctx.prisma.roaster.create({
                data: {
                    name: input.roaster.name,
                    location: input.roaster.location,
                    info: input.roaster.info,
                    url: input.roaster.url,
                    coffees: {
                        connect: {
                            id: coffee.id
                        }
                    }
                },
            });
            input.producer && await ctx.prisma.producer.create({
                data: {
                    name: input.producer.name,
                    location: input.producer.location,
                    info: input.producer.info,
                    url: input.producer.url,
                    coffees: {
                        connect: {
                            id: coffee.id
                        }
                    }
                },
            });

        }),
    deleteCoffee: authedProcedure
        .input(z.object({ coffeeId: z.string() }))
        .mutation(async ({ ctx, input }) => {
            return await ctx.prisma.coffee.delete({
                where: {
                    id: input.coffeeId,
                },
            });
        }),
});
