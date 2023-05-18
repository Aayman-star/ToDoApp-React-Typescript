import Button from "./Button";

type DisplayListProps = {
  List: list[];
  handleDelete: (id: number) => void;
  handleDone: (id: number) => void;
};

interface list {
  id: number;
  text: string;
  checked: boolean;
}

const DisplayList = ({ List, handleDelete, handleDone }: DisplayListProps) => {
  return (
    <ul>
      {List.map((item, id) => (
        <li key={item.id}>
          {item.text}
          <Button
            buttonText={"Delete"}
            handleClick={() => handleDelete(item.id)}
            id={item.id}
          />
          <Button
            buttonText={"Done"}
            handleClick={() => handleDone(item.id)}
            id={item.id}
          />
        </li>
      ))}
    </ul>
  );
};
export default DisplayList;
