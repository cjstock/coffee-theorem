import * as z from "zod"
import { CompleteUser, relatedUserModel } from "./index"

export const accountModel = z.object({
  id: z.string().optional(),
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional(),
  access_token: z.string().optional(),
  expires_at: z.number().int().optional(),
  token_type: z.string().optional(),
  scope: z.string().optional(),
  id_token: z.string().optional(),
  session_state: z.string().optional(),
  refresh_token_expires_in: z.number().int().optional(),
})

export type IaccountModel = z.infer<typeof accountModel>

export interface CompleteAccount extends z.infer<typeof accountModel> {
  user: CompleteUser
}

/**
 * relatedAccountModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedAccountModel: z.ZodSchema<CompleteAccount> = z.lazy(() => accountModel.extend({
  user: relatedUserModel,
}))
