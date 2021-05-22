function addDays(days) {
  const date = new Date(2020, 07, 22);
  date.setDate(date.getDate() + days);
  return date;
}

console.log(addDays(15));

module.exports = addDays;
