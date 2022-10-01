export const PascalwithSpaces = (input: string[]): string[] => {
    return input.map((str) => str.replace(/([A-Z])/g, " $1").trim());
};
