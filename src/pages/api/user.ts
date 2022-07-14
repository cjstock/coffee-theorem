import { resolve } from "path";
import { z } from "zod";
import { createRouter } from "../../server/router/context";

export const userRouter = createRouter()
    .query("byEmail", {
        input: z.object({
            email: z.string()
        }),
        async resolve({ctx, input}) {
            return await ctx.prisma.user.findUnique({
                where: {
                    email: input.email
                }
            })
        }
    })