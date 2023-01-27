import * as z from "zod"
import { CompleteCoffee, relatedCoffeeModel, CompleteProducer, relatedProducerModel } from "./index"

export const coffeeProducerModel = z.object({
  id: z.number().int(),
  coffeeId: z.string(),
  producerId: z.string(),
})

export interface CompleteCoffeeProducer extends z.infer<typeof coffeeProducerModel> {
  coffee: CompleteCoffee
  producer: CompleteProducer
}

/**
 * relatedCoffeeProducerModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedCoffeeProducerModel: z.ZodSchema<CompleteCoffeeProducer> = z.lazy(() => coffeeProducerModel.extend({
  coffee: relatedCoffeeModel,
  producer: relatedProducerModel,
}))
