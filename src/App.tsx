import FoodList from './components/FoodList/FoodList';
import './styles.css';

const defaultData = [
  {
    name: 'pop corn',
    expiration: new Date(),
    group: 'grain',
    id: 0,
    price: 5,
  },
  {
    name: 'carrots',
    expiration: new Date(),
    group: 'vegetable',
    id: 1,
    price: 1,
  },
  {
    name: 'blueberries',
    expiration: new Date(),
    group: 'fruit',
    id: 2,
    price: 2,
  },
];

export const App = () => {
  return (
    <>
      <h1>Hello, React {process.env.NODE_ENV}</h1>
      <FoodList listName={'first list'} listId={0} foods={defaultData} />
    </>
  );
};
