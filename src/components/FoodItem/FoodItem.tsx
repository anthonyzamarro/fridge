export interface FoodItemProps {
  name: string;
  expiration: string;
  group: string;
  id: number;
  price?: number;
  deleteFoodFromList: (id: number) => void;
}

const FoodItem = ({
  name,
  expiration,
  group,
  price,
  id,
  deleteFoodFromList,
}: FoodItemProps) => {
  const handleClickDeleteFoodItem = () => {
    deleteFoodFromList(id);
  };

  return (
    <div key={id}>
      <label htmlFor={'foodName'}>
        <p>Food Name: {name}</p>
        <input type="text" name={name} id={name} defaultValue={name} />
      </label>
      <label htmlFor={'foodGroup'}>
        <p>Food Group:</p>
        <input type="text" name={group} id={group} defaultValue={group} />
      </label>
      <label htmlFor={'foodExpiration'}>
        <p>Expiration Date:</p>
        <input
          type="date"
          name={expiration}
          id={expiration}
          defaultValue={expiration}
        />
      </label>
      <label htmlFor={'foodPrice'}>
        <p>Price:</p>
        <input
          type="number"
          name={price?.toString()}
          id={price?.toString()}
          defaultValue={price}
        />
      </label>
      <br />
      <button onClick={handleClickDeleteFoodItem}>Delete food item</button>
    </div>
  );
};

export default FoodItem;
