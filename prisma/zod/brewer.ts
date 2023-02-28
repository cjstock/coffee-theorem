import * as z from "zod"

export const brewerModel = z.object({
  id: z.string(),
  name: z.string(),
  url: z.string().nullish(),
  address: z.string().nullish(),
  info: z.string().nullish(),
  tastingNotes: z.string().nullish(),
  recipes: z.string().nullish(),
})
