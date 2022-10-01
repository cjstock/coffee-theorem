import * as z from "zod"
import { Process, Roast } from "@prisma/client"
import { CompleteTastingNote, relatedTastingNoteModel, CompleteCoffee, relatedCoffeeModel } from "./index"

export const beanModel = z.object({
  id: z.string(),
  origin: z.string().nullish(),
  process: z.nativeEnum(Process).nullish(),
  variety: z.string().nullish(),
  altitude: z.number().int().nullish(),
  roast: z.nativeEnum(Roast).nullish(),
  recipes: z.string().nullish(),
  coffeeId: z.string(),
})

export interface CompleteBean extends z.infer<typeof beanModel> {
  tastingNotes: CompleteTastingNote[]
  coffee?: CompleteCoffee | null
}

/**
 * relatedBeanModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedBeanModel: z.ZodSchema<CompleteBean> = z.lazy(() => beanModel.extend({
  tastingNotes: relatedTastingNoteModel.array(),
  coffee: relatedCoffeeModel.nullish(),
}))
