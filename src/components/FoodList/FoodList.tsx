import FoodItem from '../FoodItem/FoodItem';

interface FoodListProps {
  listName: string;
  listId: number;
  foods: object[];
}
// https://simplernerd.com/typescript-dynamic-json/
interface FoodItemProps {
  [key: string]: any;
}

const FoodList = ({ listName, listId, foods }: FoodListProps) => {
  return (
    <div key={listId}>
      <h2>{listName}</h2>
      {foods.map((food) => {
        let foodItem: FoodItemProps = {};
        foodItem = food;
        {
          return (
            <li key={foodItem.id}>
              <FoodItem
                id={foodItem.id}
                name={foodItem.name}
                expiration={9}
                group={foodItem.group}
              />
            </li>
          );
        }
      })}
    </div>
  );
};

export default FoodList;
