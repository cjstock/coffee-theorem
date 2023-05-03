export const PascalwithSpaces = (input: string[]): string[] => {
    return input.map((str) => str.replace(/([A-Z])/g, " $1").trim());
};
export function filtered<TData extends object>(
    objs: TData[],
    searchText: string
): TData[] {
    return objs.filter((obj) => {
        return (
            Object.values(obj).filter((value) =>
                value?.toString().includes(searchText)
            ).length > 0
        );
    });
}
