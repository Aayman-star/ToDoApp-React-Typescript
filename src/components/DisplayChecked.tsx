import Button from "./Button";

type DisplayCheckedProps = {
  List: list[];
  handleDelete: (id: number) => void;
  handleunDo: (id: number) => void;
};

interface list {
  id: number;
  text: string;
  checked: boolean;
}

const DisplayChecked = ({
  List,
  handleDelete,
  handleunDo
}: DisplayCheckedProps) => {
  return (
    <>
      <h3>Completed</h3>
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
              buttonText={"UnDo"}
              handleClick={() => handleunDo(item.id)}
              id={item.id}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
export default DisplayChecked;
