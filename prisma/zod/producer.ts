import * as z from "zod"

export const producerModel = z.object({
  id: z.string(),
  name: z.string(),
  url: z.string().nullish(),
  location: z.string().nullish(),
  info: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
