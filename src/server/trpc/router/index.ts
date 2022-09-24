// src/server/trpc/router/index.ts
import { t } from "../trpc";
import { authRouter } from "./auth";
import { coffeeRouter } from "./coffee";

export const appRouter = t.router({
  auth: authRouter,
  coffee: coffeeRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
