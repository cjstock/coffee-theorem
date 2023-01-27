
import { t } from "../trpc";
import { z } from "zod";
import { brewerModel } from "../../../../prisma/zod";
import { coffeeModel } from '../../../../prisma/zod/coffee';

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
        .input(z.object({ brewer: brewerModel, coffee: coffeeModel }))
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
                    coffees: {
                        connect: {
                            id: input.coffee.id
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