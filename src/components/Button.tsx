export type ButtonProps = {
  buttonText: string;
  handleClick: (id: number) => void;
  id: number;
};

const Button = ({ buttonText, handleClick, id }: ButtonProps) => {
  return <button onClick={() => handleClick(id)}>{buttonText}</button>;
};
export default Button;
