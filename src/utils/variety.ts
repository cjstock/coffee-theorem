enum Stature {
    "Tall",
    "Dwarf/Compact"
}

enum BeanSize {
    "Below Average",
    "Average",
    "Large",
    "Very Large"
}

enum QualPotHighAlt {
    "Very Low",
    "Low",
    "Good",
    "Very Good",
    "Exceptional"
}

enum YieldPotential {
    "Low",
    "Medium",
    "Good",
    "High",
    "Very High"
}

enum CoffeeLeafRust {
    "Resistant",
    "Tolerant",
    "Susceptible"
}

enum CoffeeBerryDisease {
    "Resistant",
    "Tolerant",
    "Susceptible"
}

enum Nematodes {
    "Resistant",
    "Tolerant",
    "Susceptible"
}

enum YearFirstProd {
    "Year 2",
    "Year 3",
    "Year 4"
}

enum NutReq {
    "Low",
    "Medium",
    "High",
    "Very High"
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
    NutReq
}

export { qualities }