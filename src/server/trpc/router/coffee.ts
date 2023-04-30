import { t, authedProcedure } from '../trpc';
import { z } from "zod";
import { coffeeModel } from '../../../../prisma/zod/coffee';
import { sellerModel } from '../../../../prisma/zod/seller';
import { roasterModel } from '../../../../prisma/zod/roaster';
import { producerModel } from '../../../../prisma/zod/producer';
import { brewerModel } from '../../../../prisma/zod/brewer';

export const coffeeRouter = t.router({
    getAll: authedProcedure
        .query(async ({ ctx }) => {
            return await ctx.prisma.coffee.findMany({
                where: {
                    userId: ctx.session.user.id
                },
            });
        }),
    byId: authedProcedure
        .input(z.object({ coffeeId: z.string() }))
        .query(async ({ ctx, input }) => {
            const coffee = await ctx.prisma.coffee.findUnique({
                where: {
                    id: input.coffeeId,
                },
            });
            const seller = !!coffee ? await ctx.prisma.seller.findUnique({
                where: {
                    id: coffee.sellerId || ""
                }
            }) : null
            const roaster = !!coffee ? await ctx.prisma.roaster.findUnique({
                where: {
                    id: coffee.roasterId || ""
                }
            }) : null
            const producer = !!coffee ? await ctx.prisma.producer.findUnique({
                where: {
                    id: coffee.producerId || ""
                }
            }) : null
            const brewer = !!coffee ? await ctx.prisma.brewer.findUnique({
                where: {
                    id: coffee.brewerId || ""
                }
            }) : null

            return {
                coffee,
                seller,
                roaster,
                producer,
                brewer
            }
        }),
    upsert: authedProcedure
        .input(z.object({ coffee: coffeeModel, seller: sellerModel.nullable(), roaster: roasterModel.nullable(), producer: producerModel.nullable(), brewer: brewerModel.nullable() }))
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
                    roast: input.coffee.roast
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
            const seller = !!input.seller && await ctx.prisma.seller.upsert({
                where: {
                    id: input.seller.id
                },
                update: {
                    name: input.seller.name,
                    address: input.seller.address,
                    isRoaster: input.seller.isRoaster,
                    info: input.seller.info,
                    url: input.seller.url,
                },
                create: {
                    name: input.seller.name,
                    address: input.seller.address,
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
            const roaster = !!input.roaster && await ctx.prisma.roaster.upsert({
                where: {
                    id: input.roaster.id
                },
                update: {
                    name: input.roaster.name,
                    address: input.roaster.address,
                    info: input.roaster.info,
                    url: input.roaster.url,
                },
                create: {
                    name: input.roaster.name,
                    address: input.roaster.address,
                    info: input.roaster.info,
                    url: input.roaster.url,
                    coffees: {
                        connect: {
                            id: coffee.id
                        }
                    }
                },
            });
            const producer = !!input.producer && await ctx.prisma.producer.upsert({
                where: {
                    id: input.producer.id
                },
                update: {
                    name: input.producer.name,
                    address: input.producer.address,
                    info: input.producer.info,
                    url: input.producer.url,
                },
                create: {
                    name: input.producer.name,
                    address: input.producer.address,
                    info: input.producer.info,
                    url: input.producer.url,
                    coffees: {
                        connect: {
                            id: coffee.id
                        }
                    }
                },
            });
            const brewer = !!input.brewer && await ctx.prisma.brewer.upsert({
                where: {
                    id: input.brewer.id
                },
                update: {
                    name: input.brewer.name,
                    address: input.brewer.address,
                    info: input.brewer.info,
                    url: input.brewer.url,
                },
                create: {
                    name: input.brewer.name,
                    address: input.brewer.address,
                    info: input.brewer.info,
                    url: input.brewer.url,
                    coffees: {
                        connect: {
                            id: coffee.id
                        }
                    }
                },
            });
            return {
                coffee,
                seller,
                roaster,
                producer,
                brewer
            }
        }),
    add: authedProcedure
        .input(z.object({ coffee: coffeeModel, seller: sellerModel.nullish(), roaster: roasterModel.nullish(), producer: producerModel.nullish(), brewer: brewerModel.nullish() }))
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
                    address: input.seller.address,
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
                    address: input.roaster.address,
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
                    address: input.producer.address,
                    info: input.producer.info,
                    url: input.producer.url,
                    coffees: {
                        connect: {
                            id: coffee.id
                        }
                    }
                },
            });
            input.brewer && await ctx.prisma.brewer.create({
                data: {
                    name: input.brewer.name,
                    address: input.brewer.address,
                    info: input.brewer.info,
                    url: input.brewer.url,
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
