export function sortObjectByValues<T extends Record<string, string>>(
  obj: T
): T {
  const sortedEntries = Object.entries(obj).sort((a, b) =>
    a[1].localeCompare(b[1])
  );
  return Object.fromEntries(sortedEntries) as T;
}
