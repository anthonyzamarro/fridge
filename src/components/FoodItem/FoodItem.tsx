interface FoodItemProps {
  name: string;
  expiration: number;
  group: string;
  id: number;
  price?: number;
}

const FoodItem = ({ name, expiration, group, price }: FoodItemProps) => {
  return (
    <div>
      <p>Food Name: {name}</p>
      <p>Food Group: {group}</p>
      <p>Expiration: {expiration}</p>
      <p>Price: {price}</p>
    </div>
  );
};

export default FoodItem;
