export const PascalwithSpaces = (input: string[]): string[] => {
  return input.map((str) => str.replace(/([A-Z])/g, " $1").trim());
};
export function filtered<TData extends object>(
  objs: TData[],
  searchText: string
): TData[] {
  return objs.filter((obj) => {
    const lowerSearch = searchText.toLowerCase();
    return (
      Object.values(obj).filter((value) => {
        if (
          value &&
          typeof value === "object" &&
          Object.hasOwn(value, "name")
        ) {
          return value.name.toLowerCase().includes(lowerSearch);
        }
        return value?.toString().toLowerCase().includes(lowerSearch);
      }).length > 0
    );
  });
}
