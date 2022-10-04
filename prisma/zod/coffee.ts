import * as z from "zod"
import { CompleteCoffeeTastingNote, relatedCoffeeTastingNoteModel, CompleteUser, relatedUserModel, CompleteSeller, relatedSellerModel, CompleteRoaster, relatedRoasterModel, CompleteProducer, relatedProducerModel, CompleteBrewer, relatedBrewerModel } from "./index"

export const coffeeModel = z.object({
  id: z.string(),
  origin: z.string(),
  isFavorite: z.boolean(),
  process: z.string().nullish(),
  variety: z.string().nullish(),
  altitude: z.number().int().nullish(),
  roast: z.string().nullish(),
  recipes: z.string().nullish(),
  userId: z.string(),
  sellerId: z.string().nullish(),
  roasterId: z.string().nullish(),
  producerId: z.string().nullish(),
  brewerId: z.string().nullish(),
})

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
  seller: relatedSellerModel.nullish(),
  roaster: relatedRoasterModel.nullish(),
  producer: relatedProducerModel.nullish(),
  brewer: relatedBrewerModel.nullish(),
}))
