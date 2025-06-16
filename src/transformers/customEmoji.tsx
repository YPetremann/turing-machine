type Emojis = Record<string, string>;
const emojis: Emojis = {
  T: "icon-[uim--triangle] text-blue-400 align-sub",
  R: "icon-[uim--square] text-yellow-400 align-sub",
  C: "icon-[uim--circle] text-purple-800 align-sub",
};

function Emoji({ name }) {
  const emoji = emojis[name];
  if (!emoji) return `:${name}:`;
  return (
    <span className="inline-grid items-center justify-items-center bg-white">
      <span className="col-span-full row-span-full text-transparent">;{name};</span>
      <span className={`col-span-full row-span-full ${emoji}`} />
    </span>
  );
}

const emojiRegex = /:([a-zA-Z0-9_+-]+):/;
export function customEmoji(value: string[]): string[] {
  // Replace spaces with &nbsp; to keep them in HTML
  return value.flatMap((c) => {
    if (typeof c !== "string") return c;
    const parts = c.split(emojiRegex);
    if (parts.length <= 1) return c;
    // add br elements between parts
    for (let i = 1; i < parts.length; i += 2) parts[i] = <Emoji name={parts[i]} />;
    return parts;
  });
}
