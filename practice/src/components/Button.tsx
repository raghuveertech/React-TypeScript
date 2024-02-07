type ButtonProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = (props: ButtonProps) => {
  return (
    <>
      <button id="one" onClick={props.handleClick}>
        Button
      </button>
      <button id="two" onClick={props.handleClick}>
        Button
      </button>
    </>
  );
};

export default Button;
