import * as z from "zod"
import { CompleteCoffeeTastingNote, relatedCoffeeTastingNoteModel } from "./index"

export const tastingNoteModel = z.object({
  id: z.number().int(),
  note: z.string(),
})

export interface CompleteTastingNote extends z.infer<typeof tastingNoteModel> {
  coffeeTastingNotes: CompleteCoffeeTastingNote[]
}

/**
 * relatedTastingNoteModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedTastingNoteModel: z.ZodSchema<CompleteTastingNote> = z.lazy(() => tastingNoteModel.extend({
  coffeeTastingNotes: relatedCoffeeTastingNoteModel.array(),
}))
