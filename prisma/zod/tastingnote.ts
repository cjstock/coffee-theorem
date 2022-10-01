import * as z from "zod"
import { CompleteCoffee, relatedCoffeeModel } from "./index"

export const tastingNoteModel = z.object({
  id: z.string(),
  note: z.string(),
})

export interface CompleteTastingNote extends z.infer<typeof tastingNoteModel> {
  coffees: CompleteCoffee[]
}

/**
 * relatedTastingNoteModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedTastingNoteModel: z.ZodSchema<CompleteTastingNote> = z.lazy(() => tastingNoteModel.extend({
  coffees: relatedCoffeeModel.array(),
}))
