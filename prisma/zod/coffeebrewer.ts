import * as z from "zod"
import { CompleteCoffee, relatedCoffeeModel, CompleteBrewer, relatedBrewerModel } from "./index"

export const coffeeBrewerModel = z.object({
  id: z.number().int(),
  coffeeId: z.string(),
  brewerId: z.string(),
})

export interface CompleteCoffeeBrewer extends z.infer<typeof coffeeBrewerModel> {
  coffee: CompleteCoffee
  seller: CompleteBrewer
}

/**
 * relatedCoffeeBrewerModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedCoffeeBrewerModel: z.ZodSchema<CompleteCoffeeBrewer> = z.lazy(() => coffeeBrewerModel.extend({
  coffee: relatedCoffeeModel,
  seller: relatedBrewerModel,
}))
