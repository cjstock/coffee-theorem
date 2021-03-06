// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { authRouter } from "./auth";
import { beanRouter } from "./bean";
import { userRouter } from "./user";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("auth.", authRouter)
  .merge("bean.", beanRouter)
  .merge("user.", userRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
