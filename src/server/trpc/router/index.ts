// src/server/trpc/router/index.ts
import { t } from "../trpc";
import { authRouter } from "./auth";
import { coffeeRouter } from "./coffee";
import { tastingNotesRouter } from "./tastingNotes";
import { sellerRouter } from './seller';
import { roasterRoute } from './roaster';
import { producerRoute } from './producer';
import { brewerRoute } from './brewer';

export const appRouter = t.router({
    auth: authRouter,
    coffee: coffeeRouter,
    tastingNotes: tastingNotesRouter,
    seller: sellerRouter,
    roaster: roasterRoute,
    producer: producerRoute,
    brewer: brewerRoute
});

// export type definition of API
export type AppRouter = typeof appRouter;
