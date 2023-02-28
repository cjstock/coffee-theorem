import * as z from "zod"

export const tastingNoteModel = z.object({
  id: z.number().int(),
  note: z.string(),
})
