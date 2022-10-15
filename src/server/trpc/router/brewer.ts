
import { t } from "../trpc";
import { z } from "zod";
import { brewerModel } from "../../../../prisma/zod";

export const brewerRoute = t.router({
    byId: t.procedure
        .input(z.object({ brewerId: z.string().nullish() }))
        .query(({ ctx, input }) => {
            return ctx.prisma.brewer.findUnique({
                where: {
                    id: input.brewerId || undefined,
                },
            });
        }),
    upsertBrewer: t.procedure
        .input(z.object({ brewer: brewerModel }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.brewer.upsert({
                where: {
                    id: input.brewer.id
                },
                create: {
                    name: input.brewer.name,
                    address: input.brewer.address,
                    info: input.brewer.info,
                    url: input.brewer.url,
                    coffeeId: input.brewer.coffeeId,
                    coffee: {
                        connect: {
                            id: input.brewer.coffeeId
                        }
                    },
                },
                update: {
                    ...input.brewer
                }
            })
        }),
    deleteBrewer: t.procedure
        .input(z.object({ brewerId: z.string() }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.brewer.delete({
                where: {
                    id: input.brewerId,
                },
            });
        }),
});