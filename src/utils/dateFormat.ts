// if dash (-) is present, then we were given HTML date input
// 2022-02-09 -- YYY-MM-DD = HTML Input
// 2/9/2022   -- MM-DD-YYY = new Date()
const formatFromHtml = (date: string) => {
  const [year, month, day] = date.split('-');
  return `${month}/${day}/${year}`;
};

const formatLocaleDateString = (date: string) => {
  let [day, month] = date.split('/');
  // was getting yelled at because year is never reassigned,
  // so using elision to get the year value: https://stackoverflow.com/questions/47263645/how-to-mix-const-and-let-when-using-object-or-array-destructuring-assignment-in
  const [, , year] = date.split('/');
  day = parseInt(day) > 10 ? day : `0${day}`;
  month = parseInt(month) < 10 ? `0${month}` : month;
  return `${month}/${day}/${year}`;
};

export const dateFormat = (val: string) => {
  if (val !== '' && val.includes('-')) {
    return formatFromHtml(val);
  }
  const today = new Date();
  return formatLocaleDateString(today.toLocaleDateString());
};
