import * as z from "zod"

export const tastingNoteModel = z.object({
  id: z.string(),
  value: z.string(),
})
