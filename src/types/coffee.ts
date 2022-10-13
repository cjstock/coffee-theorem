import { inferProcedureInput, inferProcedureOutput } from "@trpc/server";
import { AppRouter } from "../server/trpc/router";
import { CompleteCoffee } from '../../prisma/zod/coffee';
import { CompleteSeller } from "../../prisma/zod";

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
}

export type CoffeeInput = inferProcedureInput<AppRouter["coffee"]["upsertCoffee"]>
export type CoffeeByIdOutput = inferProcedureOutput<AppRouter["coffee"]["byId"]>
export type SellerByIdOutput = inferProcedureOutput<AppRouter["seller"]["byId"]>

export interface Input extends Omit<CompleteCoffee, "user" | "roaster" | "producer" | "brewer" | "coffeeTastingNote"> {
    seller: CompleteSeller
}

export const roastOptions = Object.values(Roast);
export const processOptions = Object.values(Process);
