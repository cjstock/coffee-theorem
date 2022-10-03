import * as z from "zod"
import { CompleteCoffeeTastingNote, relatedCoffeeTastingNoteModel } from "./index"

export const tastingNoteModel = z.object({
  id: z.number().int().optional(),
  note: z.string(),
})

export type ItastingNoteModel = z.infer<typeof tastingNoteModel>

export interface CompleteTastingNote extends z.infer<typeof tastingNoteModel> {
  coffeeTastingNote: CompleteCoffeeTastingNote[]
}

/**
 * relatedTastingNoteModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedTastingNoteModel: z.ZodSchema<CompleteTastingNote> = z.lazy(() => tastingNoteModel.extend({
  coffeeTastingNote: relatedCoffeeTastingNoteModel.array(),
}))
