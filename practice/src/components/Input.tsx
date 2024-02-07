type InputProps = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  return (
    <div>
      <input type="text" value={props.value} onChange={props.handleChange} />
    </div>
  );
};

export default Input;
