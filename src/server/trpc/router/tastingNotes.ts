import { z } from "zod";
import { t } from "../trpc";

export const tastingNotesRouter = t.router({
    getAll: t.procedure
        .query(({ ctx }) => {
            return ctx.prisma.tastingNote.findMany({});
        }),
    addTastingNote: t.procedure
        .input(z.object({ note: z.string() }))
        .mutation(async ({ input, ctx }) => {
            const existingTastingNote = await ctx.prisma.tastingNote.findFirst({
                where: {
                    note: input.note
                }
            });
            return existingTastingNote ? existingTastingNote :
                await ctx.prisma.tastingNote.create({
                    data: {
                        note: input.note
                    }
                })
        }),
    connectCoffeeToNote: t.procedure
        .input(z.object({ noteId: z.number(), coffeeId: z.string() }))
        .mutation(async ({ input, ctx }) => {
            return await ctx.prisma.coffeeTastingNote.create({
                data: {
                    tastingNoteId: input.noteId,
                    coffeeId: input.coffeeId,
                }
            })
        }),
    byCoffeeId: t.procedure
        .input(z.object({ coffeeId: z.string() }))
        .query(async ({ input, ctx }) => {
            return await ctx.prisma.tastingNote.findMany({
                where: {
                    coffeeTastingNotes: {
                        some: {
                            coffeeId: input.coffeeId
                        }
                    }
                }
            })
        }),
});
