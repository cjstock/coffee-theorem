import { Bean } from "@prisma/client";

export type CoffeeCard = Pick<
    Bean,
    | "country"
    | "id"
    | "region"
    | "isFavorite"
    | "sellerTastingNotes"
    | "roast"
    | "process"
>;
