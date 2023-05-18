//import Button from "./Button";
import { ButtonProps } from "./Button";

type TestProps = {
  text: string;
  handleUp: () => void;
  handleDown: () => void;
  ButtonComponent: React.ComponentType<ButtonProps>;
};

const Test = ({ text, ButtonComponent, handleUp, handleDown }: TestProps) => {
  return (
    <>
      <p>{text}</p>
      <ButtonComponent buttonText={"+ 1"} onClick={handleUp} />
      <ButtonComponent buttonText={"- 1 "} onClick={handleDown} />
    </>
  );
};
export default Test;
