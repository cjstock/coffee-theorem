import * as z from "zod"
import { CompleteBean, relatedBeanModel } from "./index"

export const varietyModel = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullish(),
  stature: z.number().int().nullish(),
  leafTipColor: z.string().nullish(),
  beanSize: z.number().int().nullish(),
  qualPotHighAlt: z.number().int().nullish(),
  yieldPot: z.number().int().nullish(),
  coffeeLeafRust: z.number().int().nullish(),
  coffeeBerryDisease: z.number().int().nullish(),
  nematodes: z.number().int().nullish(),
  yearOfFirstProd: z.number().int().nullish(),
  nutReq: z.number().int().nullish(),
  lineage: z.string().nullish(),
  breeder: z.string().nullish(),
  history: z.string().nullish(),
  beanId: z.string(),
})

export interface CompleteVariety extends z.infer<typeof varietyModel> {
  bean: CompleteBean
}

/**
 * relatedVarietyModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedVarietyModel: z.ZodSchema<CompleteVariety> = z.lazy(() => varietyModel.extend({
  bean: relatedBeanModel,
}))
