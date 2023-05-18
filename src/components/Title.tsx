type TitleProps = {
  heading?: string;
};

const Title = ({ heading = "Hello from the App" }: TitleProps) => {
  return <h1>{heading}</h1>;
};
export default Title;
