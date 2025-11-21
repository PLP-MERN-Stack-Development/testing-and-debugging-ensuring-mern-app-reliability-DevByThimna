export function validateBug(data) {
  if (!data.title || data.title.trim() === "") return false;
  return true;
}
