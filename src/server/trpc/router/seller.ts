import { t } from "../trpc";
import { z } from "zod";
import { coffeeModel } from '../../../../prisma/zod/coffee';
import { sellerModel } from '../../../../prisma/zod/seller';

export const sellerRouter = t.router({
    byId: t.procedure
        .input(z.object({ sellerId: z.string().nullish() }))
        .query(({ ctx, input }) => {
            return ctx.prisma.seller.findUnique({
                where: {
                    id: input.sellerId || undefined,
                },
            });
        }),
    upsertSeller: t.procedure
        .input(z.object({ seller: sellerModel, coffee: coffeeModel }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.seller.upsert({
                where: {
                    id: input.seller.id
                },
                create: {
                    ...input.seller,
                    coffees: {
                        createMany: {
                            data: [input.coffee]
                        }
                    }
                },
                update: {
                    ...input.seller,
                    coffees: {
                        createMany: {
                            data: [input.coffee]
                        }
                    }
                }
            })
        }),
    deleteSeller: t.procedure
        .input(z.object({ sellerId: z.string() }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.seller.delete({
                where: {
                    id: input.sellerId,
                },
            });
        }),
});
