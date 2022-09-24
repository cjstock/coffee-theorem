import * as z from "zod"
import { CompleteVariety, relatedVarietyModel, CompleteCoffee, relatedCoffeeModel } from "./index"

export const beanModel = z.object({
  id: z.string(),
  origin: z.string(),
  process: z.string().nullish(),
  altitude: z.string().nullish(),
  roast: z.string().nullish(),
  tastingNotes: z.string().nullish(),
  recipes: z.string().nullish(),
  coffeeId: z.string(),
})

export interface CompleteBean extends z.infer<typeof beanModel> {
  varieties: CompleteVariety[]
  coffee: CompleteCoffee
}

/**
 * relatedBeanModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedBeanModel: z.ZodSchema<CompleteBean> = z.lazy(() => beanModel.extend({
  varieties: relatedVarietyModel.array(),
  coffee: relatedCoffeeModel,
}))
