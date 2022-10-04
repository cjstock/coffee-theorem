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
  coffeeId: z.string(),
})

export interface CompleteBrewer extends z.infer<typeof brewerModel> {
  coffee?: CompleteCoffee | null
}

/**
 * relatedBrewerModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedBrewerModel: z.ZodSchema<CompleteBrewer> = z.lazy(() => brewerModel.extend({
  coffee: relatedCoffeeModel.nullish(),
}))
