import * as z from "zod"

export const varietyModel = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional(),
  stature: z.number().int().optional(),
  leafTipColor: z.string().optional(),
  beanSize: z.number().int().optional(),
  qualPotHighAlt: z.number().int().optional(),
  yieldPot: z.number().int().optional(),
  coffeeLeafRust: z.number().int().optional(),
  coffeeBerryDisease: z.number().int().optional(),
  nematodes: z.number().int().optional(),
  yearOfFirstProd: z.number().int().optional(),
  nutReq: z.number().int().optional(),
  lineage: z.string().optional(),
  breeder: z.string().optional(),
  history: z.string().optional(),
})

export type IvarietyModel = z.infer<typeof varietyModel>
