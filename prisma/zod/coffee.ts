import * as z from "zod"
import { Roast } from "@prisma/client"

export const coffeeModel = z.object({
  id: z.string(),
  origin: z.string(),
  isFavorite: z.boolean(),
  process: z.string().nullish(),
  variety: z.string().nullish(),
  altitude: z.number().int().nullish(),
  roast: z.nativeEnum(Roast),
  recipes: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string(),
  sellerId: z.string().nullish(),
  roasterId: z.string().nullish(),
  producerId: z.string().nullish(),
})
