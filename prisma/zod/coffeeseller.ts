import * as z from "zod"
import { CompleteCoffee, relatedCoffeeModel, CompleteSeller, relatedSellerModel } from "./index"

export const coffeeSellerModel = z.object({
  id: z.number().int(),
  coffeeId: z.string(),
  sellerId: z.string(),
})

export interface CompleteCoffeeSeller extends z.infer<typeof coffeeSellerModel> {
  coffee: CompleteCoffee
  seller: CompleteSeller
}

/**
 * relatedCoffeeSellerModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedCoffeeSellerModel: z.ZodSchema<CompleteCoffeeSeller> = z.lazy(() => coffeeSellerModel.extend({
  coffee: relatedCoffeeModel,
  seller: relatedSellerModel,
}))
