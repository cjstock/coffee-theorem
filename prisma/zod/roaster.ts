import * as z from "zod"
import { CompleteCoffee, relatedCoffeeModel } from "./index"

export const roasterModel = z.object({
  id: z.string(),
  name: z.string(),
  url: z.string().nullish(),
  address: z.string().nullish(),
  info: z.string().nullish(),
})

export interface CompleteRoaster extends z.infer<typeof roasterModel> {
  coffees: CompleteCoffee[]
}

/**
 * relatedRoasterModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedRoasterModel: z.ZodSchema<CompleteRoaster> = z.lazy(() => roasterModel.extend({
  coffees: relatedCoffeeModel.array(),
}))
