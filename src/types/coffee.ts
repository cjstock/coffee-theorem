import { inferProcedureOutput } from "@trpc/server";
import { AppRouter } from "../server/trpc/router";
import { coffeeModel } from '../../prisma/zod/coffee';
import { sellerModel } from '../../prisma/zod/seller';
import { producerModel } from '../../prisma/zod/producer';
import { roasterModel } from '../../prisma/zod/roaster';
import { brewerModel } from '../../prisma/zod/brewer';
import { z } from "zod";

enum Roast {
    light = "Light",
    lightMedium = "Light Medium",
    medium = "Medium",
    mediumDark = "Medium Dark",
    dark = "Dark",
    extraDark = "Extra Dark",
}

enum Process {
    natural = "Natural",
    washed = "Washed",
    pulpedNatural = "Pulped Natural",
    honey = "Honey",
    semiWashed = "Semi Washed",
    anaerobic = "Anaerobic",
    carbonicMacerated = "Carbonic Macerated"
}

export type CoffeeByIdOutput = inferProcedureOutput<AppRouter["coffee"]["byId"]>
export type CoffeesGetAllOutput = inferProcedureOutput<AppRouter["coffee"]["getAll"]>

export interface CoffeeReducer {
    coffee: z.infer<typeof coffeeModel>,
    seller: z.infer<typeof sellerModel> | null,
    roaster: z.infer<typeof roasterModel> | null,
    producer: z.infer<typeof producerModel> | null,
    brewer: z.infer<typeof brewerModel> | null
}

export const roastOptions = Object.values(Roast);
export const processOptions = Object.values(Process);
