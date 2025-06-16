const spaceRegex = /( )/;
export function keepSpaces(value: string[]): string[] {
  return value.flatMap((c) => {
    if (typeof c !== "string") return c;
    const parts = c.split(spaceRegex);
    if (parts.length <= 1) return c;
    // biome-ignore lint/complexity/noUselessFragments: needed for html entities
    for (let i = 1; i < parts.length; i += 2) parts[i] = <>&nbsp;</>;
    return parts;
  });
}
