export function formatDate(date: string) {
  const d = new Date(date);
  // console.log(d);

  const newDate = new Intl.DateTimeFormat("fr-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d);

  return newDate;
}
