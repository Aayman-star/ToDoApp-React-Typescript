import "./styles.css";
import Title from "./Title";
import AddItem from "./AddItem";
import DisplayList from "./DisplayList";
import DisplayChecked from "./DisplayChecked";

import { useState } from "react";

const ToDoApp = () => {
  //This is solely connected to taking user Input
  const [newItem, setNewItem] = useState<any>("");
  //This is where we display the data
  interface list {
    id: number;
    text: string;
    checked: boolean;
  }
  const [data, setData] = useState<list[]>([]);
  const addItem = (item) => {
    const newData = [
      ...data,
      { id: data.length + 1, checked: false, text: item }
    ];
    setData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    //addItem
    addItem(newItem);
    setNewItem("");
  };

  /**Function to handle the Delete Button */
  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };
  /*Function attached wiht the Done Button*/

  const handleDone = (id: number) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          return { ...item, checked: true };
        } else {
          return item;
        }
      })
    );

    console.log(`${data[id - 1].text} is done`);
  };

  /*function attached to the undo button* */
  const handleunDo = (id: number) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          return { ...item, checked: false };
        } else {
          return item;
        }
      })
    );
    console.log(`${data[id - 1].text} has been undone`);
  };
  /**List of unchecked items/Tasks */
  const uncheckedItems = data.filter((item) => !item.checked);

  /**List of checked items/Tasks */
  const checkedItems = data.filter((item) => item.checked);

  return (
    <>
      <Title />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      {/* /*<p>{text}</p> */}
      <DisplayList
        List={uncheckedItems}
        handleDelete={handleDelete}
        handleDone={handleDone}
      />
      {checkedItems.length ? (
        <DisplayChecked
          List={checkedItems}
          handleDelete={handleDelete}
          handleunDo={handleunDo}
        />
      ) : null}
    </>
  );
};
export default ToDoApp;
