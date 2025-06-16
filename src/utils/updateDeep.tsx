export function updateDeep(prev: unknown, key: string, update: unknown) {
  // prev is a deep object
  // key is a string like "turn.1.1" or "codes.0"
  // update is the new value or a function to update the value
  // we need to update the correct property in the object
  const keys = key.split(".");

  let prevVal = prev;
  for (const k of keys) prevVal = prevVal?.[k];
  const newVal = typeof update === "function" ? update(prevVal) : update;
  if (prevVal === newVal) return prev;

  const newSave = { ...prev };
  const lastKey = keys.pop();
  let current = newSave;
  for (const k of keys) {
    current[k] ??= {};
    current[k] = { ...current[k] };
    current = current[k] as Record<string, unknown>;
  }
  current[lastKey] = newVal;
  return newSave;
}
