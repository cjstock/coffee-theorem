import { inferProcedureInput } from "@trpc/server";
import { AppRouter } from "../server/trpc/router";

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

export type CoffeeInput = inferProcedureInput<AppRouter["coffee"]["createCoffee"]>

export const roastOptions = Object.values(Roast);
export const processOptions = Object.values(Process);
