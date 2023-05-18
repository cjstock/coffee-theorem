import * as z from "zod"

export const coffeeTastingNoteModel = z.object({
  coffeeId: z.string(),
  tastingNoteId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
