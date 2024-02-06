type GreetProps = {
  name: string;
};

const Greet = (props: GreetProps) => {
  const { name } = props;
  return <div>Welcome {name}!</div>;
};

export default Greet;
