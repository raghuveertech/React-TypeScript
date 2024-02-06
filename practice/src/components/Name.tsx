type NameProps = {
  name: {
    firstName: string;
    lastName: string;
  };
};

const Name = (props: NameProps) => {
  const { name } = props;
  return (
    <p>
      {name.firstName} {name.lastName}
    </p>
  );
};

export default Name;
