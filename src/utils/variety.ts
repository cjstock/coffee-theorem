interface Variety {
    name: string;
    description: string | undefined;
    lineage: string | undefined;
    breeder: string | undefined;
    history: string | undefined;
    stature: Stature | undefined;
    leafTipColor: string | undefined;
    beanSize: BeanSize | undefined;
    qualPotHighAlt: QualPotHighAlt | undefined;
    yieldPot: YieldPotential | undefined;
    coffeeLeafRust: CoffeeLeafRust | undefined;
    coffeeBerryDisease: CoffeeBerryDisease | undefined;
    nematodes: Nematodes | undefined;
    yearOfFirstProd: YearFirstProd | undefined;
    nutReq: NutReq | undefined;
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
