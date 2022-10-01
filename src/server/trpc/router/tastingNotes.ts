import { z } from "zod";
import { t } from "../trpc";

export const tastingNotesRouter = t.router({
    getAll: t.procedure
        .query(({ ctx }) => {
            return ctx.prisma.tastingNote.findMany({});
        }),
    add: t.procedure
        .input(z.object({ coffeeId: z.string(), note: z.string(), id: z.string() }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.tastingNote.upsert({
                where: {
                    id: input.id
                },
                create: {
                    note: input.note,
                    coffees: {
                        connect: {
                            id: input.coffeeId
                        }
                    }
                },
                update: {
                    coffees: {
                        connect: {
                            id: input.coffeeId
                        }
                    }
                }
            })
        })
});
