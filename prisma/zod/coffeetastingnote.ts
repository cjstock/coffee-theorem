import * as z from "zod"
import { CompleteCoffee, relatedCoffeeModel, CompleteTastingNote, relatedTastingNoteModel } from "./index"

export const coffeeTastingNoteModel = z.object({
  id: z.number().int(),
  coffeeId: z.string(),
  tastingNoteId: z.number().int(),
})

export type IcoffeeTastingNoteModel = z.infer<typeof coffeeTastingNoteModel>

export interface CompleteCoffeeTastingNote extends z.infer<typeof coffeeTastingNoteModel> {
  coffee: CompleteCoffee
  tastingNote: CompleteTastingNote
}

/**
 * relatedCoffeeTastingNoteModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedCoffeeTastingNoteModel: z.ZodSchema<CompleteCoffeeTastingNote> = z.lazy(() => coffeeTastingNoteModel.extend({
  coffee: relatedCoffeeModel,
  tastingNote: relatedTastingNoteModel,
}))
