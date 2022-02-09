import FoodItem from '../FoodItem/FoodItem';

interface FoodListProps {
  listName: string;
  listId: number;
  foods: object;
}
// https://simplernerd.com/typescript-dynamic-json/
interface FoodItemProps {
  [key: string]: any;
}

const FoodList = ({ listName, listId, foods }: FoodListProps) => {
  return (
    <div key={listId}>
      <h2>{listName}</h2>
      {[foods].map((food: object) => {
        let foodItem: FoodItemProps = {};
        foodItem = food;
        // console.log(foodItem);
        {
          return (
            <li key={foodItem.id + 1}>
              <FoodItem
                id={foodItem.id + 1}
                name={foodItem.name}
                expiration={foodItem.expiration}
                group={foodItem.group}
                price={foodItem.price}
              />
            </li>
          );
        }
      })}
    </div>
  );
};

export default FoodList;
