import { authedProcedure, t } from "../trpc";
import { z } from "zod";
import { producerModel } from "../../../../prisma/zod";
import { coffeeModel } from '../../../../prisma/zod/coffee';

export const producerRoute = t.router({
    getAll: authedProcedure
        .input(z.object({ coffees: z.array(coffeeModel).nullish() }))
        .query(async ({ ctx, input }) => {
            if (input.coffees) {
                return await ctx.prisma.producer.findMany({
                    where: {
                        id: {
                            in: input.coffees.map(coffee => coffee.producerId as string).filter(producerId => producerId !== null)
                        },
                    },
                });
            }
            return await ctx.prisma.producer.findMany({})
        }),
    byId: t.procedure
        .input(z.object({ producerId: z.string().nullish() }))
        .query(({ ctx, input }) => {
            return ctx.prisma.producer.findUnique({
                where: {
                    id: input.producerId || undefined,
                },
            });
        }),
    upsertProducer: t.procedure
        .input(z.object({ producer: producerModel, coffee: coffeeModel }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.producer.upsert({
                where: {
                    id: input.producer.id
                },
                create: {
                    name: input.producer.name,
                    location: input.producer.location,
                    info: input.producer.info,
                    url: input.producer.url,
                    coffees: {
                        connect: {
                            id: input.coffee.id
                        }
                    },
                },
                update: {
                    ...input.producer
                }
            })
        }),
    deleteProducer: t.procedure
        .input(z.object({ producerId: z.string() }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.producer.delete({
                where: {
                    id: input.producerId,
                },
            });
        }),
});