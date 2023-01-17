import { t } from "../trpc";
import { z } from "zod";
import { producerModel } from "../../../../prisma/zod";

export const producerRoute = t.router({
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
        .input(z.object({ producer: producerModel }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.producer.upsert({
                where: {
                    id: input.producer.id
                },
                create: {
                    name: input.producer.name,
                    address: input.producer.address,
                    info: input.producer.info,
                    url: input.producer.url,
                    coffeeId: input.producer.coffeeId,
                    coffee: {
                        connect: {
                            id: input.producer.coffeeId
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