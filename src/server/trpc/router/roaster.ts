import { t } from "../trpc";
import { z } from "zod";
import { roasterModel } from "../../../../prisma/zod/roaster";

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
        .input(z.object({ roaster: roasterModel }))
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
                    coffeeId: input.roaster.coffeeId,
                    coffee: {
                        connect: {
                            id: input.roaster.coffeeId
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