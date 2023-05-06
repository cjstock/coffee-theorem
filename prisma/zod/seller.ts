import * as z from "zod"

export const sellerModel = z.object({
  id: z.string(),
  name: z.string(),
  url: z.string().nullish(),
  location: z.string().nullish(),
  info: z.string().nullish(),
  isRoaster: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
