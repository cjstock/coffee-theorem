import * as z from "zod"
import { CompleteBean, relatedBeanModel, CompleteUser, relatedUserModel, CompleteSeller, relatedSellerModel, CompleteRoaster, relatedRoasterModel, CompleteProducer, relatedProducerModel, CompleteBrewer, relatedBrewerModel } from "./index"

export const coffeeModel = z.object({
  id: z.string(),
  originName: z.string(),
  isBlend: z.boolean(),
  isFavorite: z.boolean(),
  userId: z.string(),
  sellerId: z.string(),
  roasterId: z.string(),
  producerId: z.string(),
  brewerId: z.string(),
})

export interface CompleteCoffee extends z.infer<typeof coffeeModel> {
  beans: CompleteBean[]
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
  beans: relatedBeanModel.array(),
  user: relatedUserModel,
  seller: relatedSellerModel.nullish(),
  roaster: relatedRoasterModel.nullish(),
  producer: relatedProducerModel.nullish(),
  brewer: relatedBrewerModel.nullish(),
}))
