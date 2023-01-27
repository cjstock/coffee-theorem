import { t } from "../trpc";
import { z } from "zod";
import { roasterModel } from "../../../../prisma/zod/roaster";
import { coffeeModel } from '../../../../prisma/zod/coffee';

export const roasterRoute = t.router({
    byId: t.procedure
        .input(z.object({ roasterId: z.string().nullish() }))
        .query(({ ctx, input }) => {
            return ctx.prisma.roaster.findUnique({
                where: {
                    id: input.roasterId || undefined,
                },
            });
        }),
    upsertRoaster: t.procedure
        .input(z.object({ roaster: roasterModel, coffee: coffeeModel }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.roaster.upsert({
                where: {
                    id: input.roaster.id
                },
                create: {
                    name: input.roaster.name,
                    address: input.roaster.address,
                    info: input.roaster.info,
                    url: input.roaster.url,
                    coffees: {
                        connect: {
                            id: input.coffee.id
                        }
                    },
                },
                update: {
                    ...input.roaster
                }
            })
        }),
    deleteRoaster: t.procedure
        .input(z.object({ roasterId: z.string() }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.roaster.delete({
                where: {
                    id: input.roasterId,
                },
            });
        }),
});