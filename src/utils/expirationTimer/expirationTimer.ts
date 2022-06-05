import differenceInDays from 'date-fns/differenceInDays';

const expirationTimer = (expiration: string): number => {
  /**  
    will tell user how many days left until food expires
  */
  const today = new Date();
  /**
   * for some reason, when passing HTML input date into new Date() class, the day was off by one,
   * so this is a workaround to fix that
   */
  const expiresObject = new Date(expiration);
  const expirationDate = new Date(
    expiresObject.setDate(expiresObject.getDate() + 1)
  );

  if (today >= expirationDate) {
    return 0;
  }

  // console.log(expirationDate, differenceInDays(expirationDate, today));

  return differenceInDays(expirationDate, today);
};

export default expirationTimer;
