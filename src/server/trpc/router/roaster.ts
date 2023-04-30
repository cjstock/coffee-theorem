import { authedProcedure, t } from "../trpc";
import { z } from "zod";
import { roasterModel } from "../../../../prisma/zod/roaster";
import { coffeeModel } from '../../../../prisma/zod/coffee';

export const roasterRoute = t.router({
    getAll: authedProcedure
        .input(z.object({ coffees: z.array(coffeeModel).nullish() }))
        .query(async ({ ctx, input }) => {
            if (input.coffees) {
                return await ctx.prisma.roaster.findMany({
                    where: {
                        id: {
                            in: input.coffees.map(coffee => coffee.roasterId as string).filter(roasterId => roasterId !== null)
                        },
                    },
                });
            }
            return await ctx.prisma.seller.findMany({})
        }),
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