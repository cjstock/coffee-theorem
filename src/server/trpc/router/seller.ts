import { t } from "../trpc";
import { z } from "zod";
import { sellerModel } from '../../../../prisma/zod/seller';

export const sellerRouter = t.router({
    byId: t.procedure
        .input(z.object({ sellerId: z.string() }))
        .query(({ ctx, input }) => {
            return ctx.prisma.seller.findUnique({
                where: {
                    id: input.sellerId,
                },
            });
        }),
    upsertSeller: t.procedure
        .input(z.object({ seller: sellerModel }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.seller.upsert({
                where: {
                    id: input.seller.id
                },
                create: {
                    isRoaster: input.seller.isRoaster,
                    name: input.seller.name,
                    address: input.seller.address,
                    info: input.seller.info,
                    url: input.seller.url,
                    coffeeId: input.seller.coffeeId,
                    coffee: {
                        connect: {
                            id: input.seller.coffeeId
                        }
                    },
                },
                update: {
                    ...input.seller
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
