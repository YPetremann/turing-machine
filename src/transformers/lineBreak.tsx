const lineBreakRegex = /(\r\n|\n|\r)/;
export function lineBreak(value: string[]): string[] {
  // Replace line breaks with <br> tags
  return value.flatMap((c) => {
    if (typeof c !== "string") return c;
    const parts = c.split(lineBreakRegex);
    if (parts.length <= 1) return c;
    // add br elements between parts
    for (let i = 1; i < parts.length; i += 2) parts[i] = <br />;
    return parts;
  });
}
