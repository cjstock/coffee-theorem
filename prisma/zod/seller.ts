import * as z from "zod"
import { CompleteCoffee, relatedCoffeeModel } from "./index"

export const sellerModel = z.object({
  id: z.string(),
  name: z.string(),
  url: z.string().nullish(),
  address: z.string().nullish(),
  info: z.string().nullish(),
  isRoaster: z.boolean(),
  coffeeId: z.string(),
})

export interface CompleteSeller extends z.infer<typeof sellerModel> {
  coffee?: CompleteCoffee | null
}

/**
 * relatedSellerModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedSellerModel: z.ZodSchema<CompleteSeller> = z.lazy(() => sellerModel.extend({
  coffee: relatedCoffeeModel.nullish(),
}))
