import * as z from "zod"
import { CompleteCoffee, relatedCoffeeModel } from "./index"

export const brewerModel = z.object({
  id: z.string().optional(),
  name: z.string(),
  url: z.string().optional(),
  address: z.string().optional(),
  info: z.string().optional(),
  tastingNotes: z.string().optional(),
  recipes: z.string().optional(),
  coffeeId: z.string(),
})

export type IbrewerModel = z.infer<typeof brewerModel>

export interface CompleteBrewer extends z.infer<typeof brewerModel> {
  coffee?: CompleteCoffee | null
}

/**
 * relatedBrewerModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedBrewerModel: z.ZodSchema<CompleteBrewer> = z.lazy(() => brewerModel.extend({
  coffee: relatedCoffeeModel.optional(),
}))
