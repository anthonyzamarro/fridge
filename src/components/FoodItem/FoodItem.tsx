export interface FoodItemProps {
  name: string;
  expiration: string;
  group: string;
  id: number;
  price?: number;
}

const FoodItem = ({ name, expiration, group, price }: FoodItemProps) => {
  return (
    <div>
      <label htmlFor={name}>
        <input type="text" name={name} id={name} defaultValue={name} />
      </label>
      <label htmlFor={group}>
        <input type="text" name={group} id={group} defaultValue={group} />
      </label>
      <label htmlFor={expiration}>
        <input
          type="date"
          name={expiration}
          id={expiration}
          defaultValue={expiration}
        />
      </label>
      {/* <p>Expiration: {expiration}</p> */}
      <label htmlFor={price?.toString()}>
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
