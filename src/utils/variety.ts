interface Variety {
    name: string;
    description: string | null;
    lineage: string | null;
    breeder: string | null;
    history: string | null;
    stature: Stature | null;
    leafTipColor: string | null;
    beanSize: BeanSize | null;
    qualPotHighAlt: QualPotHighAlt | null;
    yieldPot: YieldPotential | null;
    coffeeLeafRust: CoffeeLeafRust | null;
    coffeeBerryDisease: CoffeeBerryDisease | null;
    nematodes: Nematodes | null;
    yearOfFirstProd: YearFirstProd | null;
    nutReq: NutReq | null;
}

enum Stature {
    "Dwarf/Compact" = 1,
    "Tall",
}

enum BeanSize {
    "Below Average" = 1,
    "Average",
    "Large",
    "Very Large",
}

enum QualPotHighAlt {
    "Very Low" = 1,
    "Low",
    "Good",
    "Very Good",
    "Exceptional",
}

enum YieldPotential {
    "Low" = 1,
    "Medium",
    "Good",
    "High",
    "Very High",
}

enum CoffeeLeafRust {
    "Resistant" = 1,
    "Tolerant",
    "Susceptible",
}

enum CoffeeBerryDisease {
    "Resistant" = 1,
    "Tolerant",
    "Susceptible",
}

enum Nematodes {
    "Resistant" = 1,
    "Tolerant",
    "Susceptible",
}

enum YearFirstProd {
    "Year 2" = 1,
    "Year 3",
    "Year 4",
}

enum NutReq {
    "Low" = 1,
    "Medium",
    "High",
    "Very High",
}

const qualities = {
    Stature,
    BeanSize,
    QualPotHighAlt,
    YieldPotential,
    CoffeeBerryDisease,
    CoffeeLeafRust,
    Nematodes,
    YearFirstProd,
    NutReq,
};

export { qualities };
export type { Variety };
