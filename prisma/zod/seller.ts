import * as z from "zod"
import { CompleteCoffee, relatedCoffeeModel } from "./index"

export const sellerModel = z.object({
  id: z.string().optional(),
  name: z.string(),
  url: z.string().optional(),
  address: z.string().optional(),
  info: z.string().optional(),
  isRoaster: z.boolean(),
  coffeeId: z.string(),
})

export type IsellerModel = z.infer<typeof sellerModel>

export interface CompleteSeller extends z.infer<typeof sellerModel> {
  coffee?: CompleteCoffee | null
}

/**
 * relatedSellerModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedSellerModel: z.ZodSchema<CompleteSeller> = z.lazy(() => sellerModel.extend({
  coffee: relatedCoffeeModel.optional(),
}))
