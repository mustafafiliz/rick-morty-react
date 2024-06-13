export function formatDate(dateString: Date) {
  const date = new Date(dateString);
  const options = { day: "2-digit", month: "2-digit", year: "numeric" } as any;
  return new Intl.DateTimeFormat("tr-TR", options).format(date);
}
