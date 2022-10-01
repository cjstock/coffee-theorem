import * as z from "zod"

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
})
