import * as z from "zod"
import { CompleteCoffeeTastingNote, relatedCoffeeTastingNoteModel, CompleteUser, relatedUserModel, CompleteSeller, relatedSellerModel, CompleteRoaster, relatedRoasterModel, CompleteProducer, relatedProducerModel, CompleteBrewer, relatedBrewerModel } from "./index"

export const coffeeModel = z.object({
  id: z.string().optional(),
  origin: z.string(),
  isFavorite: z.boolean(),
  process: z.string().optional(),
  variety: z.string().optional(),
  altitude: z.number().int().optional(),
  roast: z.string().optional(),
  recipes: z.string().optional(),
  userId: z.string(),
  sellerId: z.string().optional(),
  roasterId: z.string().optional(),
  producerId: z.string().optional(),
  brewerId: z.string().optional(),
})

export type IcoffeeModel = z.infer<typeof coffeeModel>

export interface CompleteCoffee extends z.infer<typeof coffeeModel> {
  coffeeTastingNote: CompleteCoffeeTastingNote[]
  user: CompleteUser
  seller?: CompleteSeller | null
  roaster?: CompleteRoaster | null
  producer?: CompleteProducer | null
  brewer?: CompleteBrewer | null
}

/**
 * relatedCoffeeModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedCoffeeModel: z.ZodSchema<CompleteCoffee> = z.lazy(() => coffeeModel.extend({
  coffeeTastingNote: relatedCoffeeTastingNoteModel.array(),
  user: relatedUserModel,
  seller: relatedSellerModel.optional(),
  roaster: relatedRoasterModel.optional(),
  producer: relatedProducerModel.optional(),
  brewer: relatedBrewerModel.optional(),
}))
