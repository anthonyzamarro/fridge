export interface FoodItemProps {
  name: string;
  expiration: string;
  group: string;
  id: number;
  price?: number;
}

const FoodItem = ({ name, expiration, group, price, id }: FoodItemProps) => {
  return (
    <div key={id}>
      <label htmlFor={'foodName'}>
        <p>Food Name:</p>
        <input type="text" name={name} id={name} defaultValue={name} />
      </label>
      <label htmlFor={'foodGroup'}>
        <p>Food Group:</p>
        <input type="text" name={group} id={group} defaultValue={group} />
      </label>
      <label htmlFor={'foodExpiration'}>
        <input
          type="date"
          name={expiration}
          id={expiration}
          defaultValue={expiration}
        />
      </label>
      <label htmlFor={'foodPrice'}>
        <input
          type="number"
          name={price?.toString()}
          id={price?.toString()}
          defaultValue={price}
        />
      </label>
    </div>
  );
};

export default FoodItem;
