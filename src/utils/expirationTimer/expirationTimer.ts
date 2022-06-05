const expirationTimer = (expiration: string): number => {
  /**  
    will tell user how many days left until food expires
  */
  let today = new Date().getDate()
  /**
   * for some reason, when passing HTML input date into new Date() class, the day was off by one, 
   * so this is a workaround to fix that
   */
  let expiresObject = new Date(expiration)
  let expirationDate = new Date(expiresObject.setDate(expiresObject.getDate() + 1)).getDate()

  if (today >= expirationDate) {
    return 0
  }

  return expirationDate - today
};

export default expirationTimer