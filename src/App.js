import { useEffect, useState } from 'react';
import './App.css';
import Item from './components/item';

function App() {
  // Initialize the selected items list and order list with useMemo to prevent unnecessary re-renders
  const [selectedItemsList, setSelectedItemsList] = useState(() => [
    { text: 1, selected: false },
    { text: 2, selected: false },
    { text: 3, selected: false },
    { text: 4, selected: false },
    { text: 5, selected: false },
    { text: 6, selected: false },
    { text: 7, selected: false },
    { text: 8, selected: false },
    { text: 9, selected: false },
  ]);

  const [orderList, setOrderList] = useState([]); // Initialize the order list with an empty array

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Define the undo function using async/await
  const undo = async () => {
    for (const removeItem of orderList.reverse()) {
      await delay(300);
      setSelectedItemsList((prevListState) => {
        return prevListState.map((obj) => {
          if (obj.text === removeItem) {
            return { ...obj, selected: false };
          }
          return obj;
        });
      });
    }
    // Clear the order list after undoing the selections
    setOrderList([]);
  };

  // Use useEffect to call the undo function when the orderList length reaches 8
  useEffect(() => {
    if (orderList.length === 8) {
      undo();
    }
  }, [orderList]);

  return (
    <div className="App">
      <div className="grid-container">
        {selectedItemsList.map((item) => {
          return (
            <Item
              item={item}
              key={item.text}
              setOrderList={setOrderList}
              setSelectedItemsList={setSelectedItemsList}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;