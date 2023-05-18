import { z } from "zod";
import { t } from "../trpc";
import { tastingNoteModel } from "prisma/zod";

export const tastingNotesRouter = t.router({
    getAll: t.procedure
        .query(({ ctx }) => {
            return ctx.prisma.tastingNote.findMany({});
        }),
    addTastingNote: t.procedure
        .input(z.object({ tastingNote: tastingNoteModel }))
        .mutation(async ({ input, ctx }) => {
            return await ctx.prisma.tastingNote.upsert({
                where: {
                    id: input.tastingNote.id
                },
                create: {
                    value: input.tastingNote.value
                },
                update: {
                    value: input.tastingNote.value
                }
            })
        }),
    connectCoffeeToNote: t.procedure
        .input(z.object({ noteId: z.string(), coffeeId: z.string() }))
        .mutation(async ({ input, ctx }) => {
            return await ctx.prisma.coffeeTastingNote.create({
                data: {
                    tastingNoteId: input.noteId,
                    coffeeId: input.coffeeId,
                }
            })
        }),
    removeFromCoffee: t.procedure
        .input(z.object({ noteId: z.string(), coffeeId: z.string() }))
        .mutation(async ({ input, ctx }) => {
            return await ctx.prisma.coffeeTastingNote.delete({
                where: {
                    coffeeId_tastingNoteId: {
                        coffeeId: input.coffeeId,
                        tastingNoteId: input.noteId
                    }
                }
            })
        })
});
