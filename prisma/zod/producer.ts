import * as z from "zod"
import { CompleteCoffee, relatedCoffeeModel } from "./index"

export const producerModel = z.object({
  id: z.string(),
  name: z.string(),
  url: z.string().nullish(),
  address: z.string().nullish(),
  info: z.string().nullish(),
  coffeeId: z.string(),
})

export interface CompleteProducer extends z.infer<typeof producerModel> {
  coffee?: CompleteCoffee | null
}

/**
 * relatedProducerModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedProducerModel: z.ZodSchema<CompleteProducer> = z.lazy(() => producerModel.extend({
  coffee: relatedCoffeeModel.nullish(),
}))
