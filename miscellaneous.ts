export function generateUID(prefix = "UID"): string {
  return `${prefix}${Date.now()}R${Math.floor(Math.random() * 1000000)}`;
}
