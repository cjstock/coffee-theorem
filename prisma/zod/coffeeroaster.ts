import * as z from "zod"
import { CompleteCoffee, relatedCoffeeModel, CompleteRoaster, relatedRoasterModel } from "./index"

export const coffeeRoasterModel = z.object({
  id: z.number().int(),
  coffeeId: z.string(),
  roasterId: z.string(),
})

export interface CompleteCoffeeRoaster extends z.infer<typeof coffeeRoasterModel> {
  coffee: CompleteCoffee
  roaster: CompleteRoaster
}

/**
 * relatedCoffeeRoasterModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedCoffeeRoasterModel: z.ZodSchema<CompleteCoffeeRoaster> = z.lazy(() => coffeeRoasterModel.extend({
  coffee: relatedCoffeeModel,
  roaster: relatedRoasterModel,
}))
