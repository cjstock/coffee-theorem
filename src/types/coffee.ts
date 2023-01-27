import { inferProcedureOutput } from "@trpc/server";
import { AppRouter } from "../server/trpc/router";
import { CompleteCoffee } from '../../prisma/zod/coffee';
import { CompleteSeller } from "../../prisma/zod";
import { CompleteRoaster } from '../../prisma/zod/roaster';
import { CompleteProducer } from '../../prisma/zod/producer';
import { CompleteBrewer } from '../../prisma/zod/brewer';
import { CompleteCoffeeTastingNote } from '../../prisma/zod/coffeetastingnote';
import { TastingNote } from '@prisma/client';

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

export interface Input extends Omit<CompleteCoffee, "user"> {
    seller: CompleteSeller,
    roaster: CompleteRoaster,
    producer: CompleteProducer,
    brewer: CompleteBrewer,
    coffeeTastingNotes: CompleteCoffeeTastingNote[],
    tastingNotes: TastingNote[]
}

export const roastOptions = Object.values(Roast);
export const processOptions = Object.values(Process);
