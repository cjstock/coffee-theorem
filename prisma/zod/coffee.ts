import * as z from "zod"

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
