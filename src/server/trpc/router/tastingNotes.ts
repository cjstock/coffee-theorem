import { z } from "zod";
import { t } from "../trpc";

export const tastingNotesRouter = t.router({
    getAll: t.procedure
        .query(({ ctx }) => {
            return ctx.prisma.tastingNote.findMany({});
        }),
});
