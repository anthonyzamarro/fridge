import { dateFormat } from "../dateFormat/dateFormat";
import { expirationDateProps } from "./interfaces";

const expirationDate = ({
  date, 
  group, 
  // packaging, 
  // refridgerated, 
  // frozen
  }: expirationDateProps) => {
  /**  
    timer function that is started whenever new food item is added to a list
    will need to predict expiration of food item based on what the food is
    and when it was added to the list

    expiration based: 
    - on date input
    - food group
    - food packaging
    - if refridgerated/freezed
  */
 if (date) {
   let today = new Date(date)
   let timeFromToday = today.setDate(today.getDate() + 14)
   let expirationDate = new Date(timeFromToday)
   
  //  console.log('timeFromToday: ', timeFromToday, 'expirationDate: ', expirationDate.toLocaleDateString())
  //  console.log('date: ', date, 'foodGroup: ', group)
   return expirationDate.toLocaleDateString()
  } else {
    let today = new Date()
    let timeFromToday = today.setDate(today.getDate() + 14)
    let expirationDate = new Date(timeFromToday)
    
    // console.log('timeFromToday: ', timeFromToday, 'expirationDate: ', expirationDate.toLocaleDateString())
    // console.log('date: ', date, 'foodGroup: ', group)
    return expirationDate.toLocaleDateString()
  }


    // switch(foodGroup) {
    //   case 'vegetable':
    // }
};

export default expirationDate