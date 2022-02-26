export interface FoodItemProps {
  name: string;
  expiration: string;
  group: string;
  id: number;
  price?: number;
  deleteFoodFromList: (id: number) => void;
  // updateFoodName: (name: string) => void;
  // updateFoodGroup: (group: string) => void;
  // updateFoodExpiration: (expiration: string) => void;
  // updateFoodPrice: (price: number) => void;
}

const FoodItem = ({
  name,
  expiration,
  group,
  price,
  id,
  deleteFoodFromList,
}: // updateFoodName,
// updateFoodGroup,
// updateFoodExpiration,
// updateFoodPrice,
FoodItemProps) => {
  const handleClickDeleteFoodItem = () => {
    deleteFoodFromList(id);
  };

  // const handleUpdateFoodName = () => {
  //   console.log('balh', name);
  // };

  return (
    <div key={id}>
      <label htmlFor={'foodName'}>
        <p>Food Name: {name}</p>
        <input
          type="text"
          name={name}
          id={name}
          defaultValue={name}
          // onChange={handleUpdateFoodName}
        />
        {/* <button onClick={handleUpdateFoodName}>Update food name</button> */}
      </label>
      <label htmlFor={'foodGroup'}>
        <p>Food Group:</p>
        <input type="text" name={group} id={group} defaultValue={group} />
        {/* <button onClick={updateFoodGroup}>Update food group</button> */}
      </label>
      <label htmlFor={'foodExpiration'}>
        <p>Expiration Date:</p>
        <input
          type="date"
          name={expiration}
          id={expiration}
          defaultValue={expiration}
        />
        {/* <button onClick={updateFoodExpiration}>
          Update food expiration date
        </button> */}
      </label>
      <label htmlFor={'foodPrice'}>
        <p>Price:</p>
        <input
          type="number"
          name={price?.toString()}
          id={price?.toString()}
          defaultValue={price}
        />
        {/* <button onClick={updateFoodPrice}>Update food price</button> */}
      </label>
      <br />
      <button onClick={handleClickDeleteFoodItem}>Delete food item</button>
    </div>
  );
};

export default FoodItem;
