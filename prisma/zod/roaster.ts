import * as z from "zod"
import { CompleteCoffee, relatedCoffeeModel } from "./index"

export const roasterModel = z.object({
  id: z.string().optional(),
  name: z.string(),
  url: z.string().optional(),
  address: z.string().optional(),
  info: z.string().optional(),
  coffeeId: z.string(),
})

export type IroasterModel = z.infer<typeof roasterModel>

export interface CompleteRoaster extends z.infer<typeof roasterModel> {
  coffee?: CompleteCoffee | null
}

/**
 * relatedRoasterModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedRoasterModel: z.ZodSchema<CompleteRoaster> = z.lazy(() => roasterModel.extend({
  coffee: relatedCoffeeModel.optional(),
}))
