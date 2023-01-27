import * as z from "zod"
import { CompleteCoffee, relatedCoffeeModel } from "./index"

export const brewerModel = z.object({
  id: z.string(),
  name: z.string(),
  url: z.string().nullish(),
  address: z.string().nullish(),
  info: z.string().nullish(),
  tastingNotes: z.string().nullish(),
  recipes: z.string().nullish(),
})

export interface CompleteBrewer extends z.infer<typeof brewerModel> {
  coffees: CompleteCoffee[]
}

/**
 * relatedBrewerModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedBrewerModel: z.ZodSchema<CompleteBrewer> = z.lazy(() => brewerModel.extend({
  coffees: relatedCoffeeModel.array(),
}))
