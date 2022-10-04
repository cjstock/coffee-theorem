import * as z from "zod"
import { CompleteCoffee, relatedCoffeeModel, CompleteAccount, relatedAccountModel, CompleteSession, relatedSessionModel } from "./index"

export const userModel = z.object({
  id: z.string(),
  name: z.string().nullish(),
  email: z.string(),
  emailVerified: z.date().nullish(),
  image: z.string().nullish(),
})

export interface CompleteUser extends z.infer<typeof userModel> {
  coffees: CompleteCoffee[]
  accounts: CompleteAccount[]
  sessions: CompleteSession[]
}

/**
 * relatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() => userModel.extend({
  coffees: relatedCoffeeModel.array(),
  accounts: relatedAccountModel.array(),
  sessions: relatedSessionModel.array(),
}))
