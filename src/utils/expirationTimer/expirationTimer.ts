import { expirationTimerProps } from "./interfaces";

const expirationTimer = ({
  date, 
  // foodGroup, 
  // packaging, 
  // refridgerated, 
  // frozen
  }: expirationTimerProps) => {
  /**  
    timer function that is started whenever new food item is added to a list
    will need to predict expiration of food item based on what the food is
    and when it was added to the list

    expiration based: 
    - on date bought 
    - food group
    - food packaging
    - if refridgerated/freezed
  */
 let today = new Date()
 let twoWeeksFromToday = today.setDate(today.getDate() + 14)
 let expirationDate = new Date(twoWeeksFromToday)

  // console.log(twoWeeksFromToday, expirationDate)

    // switch(foodGroup) {
    //   case 'vegetable':
    // }
};

export default expirationTimer