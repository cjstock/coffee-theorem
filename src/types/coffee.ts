import { inferProcedureOutput } from "@trpc/server";
import { AppRouter } from "../server/trpc/router";
import { coffeeModel } from '../../prisma/zod/coffee';
import { sellerModel } from '../../prisma/zod/seller';
import { producerModel } from '../../prisma/zod/producer';
import { roasterModel } from '../../prisma/zod/roaster';
import { z } from "zod";
import { coffeeTastingNoteModel } from "prisma/zod";


enum Roast {
    light = "Light",
    lightMedium = "LightMedium",
    medium = "Medium",
    mediumDark = "MediumDark",
    dark = "Dark",
    extraDark = "ExtraDark",
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
    tastingNotes: z.infer<typeof coffeeTastingNoteModel>[] | null,
    seller: z.infer<typeof sellerModel> | null,
    roaster: z.infer<typeof roasterModel> | null,
    producer: z.infer<typeof producerModel> | null,
}

export const roastOptions = Object.values(Roast);
export const processOptions = Object.values(Process);
