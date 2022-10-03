import * as z from "zod"
import { CompleteCoffee, relatedCoffeeModel } from "./index"

export const producerModel = z.object({
  id: z.string().optional(),
  name: z.string(),
  url: z.string().optional(),
  address: z.string().optional(),
  info: z.string().optional(),
  coffeeId: z.string(),
})

export type IproducerModel = z.infer<typeof producerModel>

export interface CompleteProducer extends z.infer<typeof producerModel> {
  coffee?: CompleteCoffee | null
}

/**
 * relatedProducerModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedProducerModel: z.ZodSchema<CompleteProducer> = z.lazy(() => producerModel.extend({
  coffee: relatedCoffeeModel.optional(),
}))
