export function replaceString(str: string, mapObj: any) {
  if (!str) {
    return str;
  }
  const re = new RegExp(Object.keys(mapObj).join("|"), "gi");

  return str.replace(re, (matched: string) => mapObj[matched]);
}
