import * as z from "zod"

export const coffeeTastingNoteModel = z.object({
  id: z.number().int(),
  coffeeId: z.string(),
  tastingNoteId: z.number().int(),
})
