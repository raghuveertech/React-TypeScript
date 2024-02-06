type PersonsProps = {
  persons: {
    firstName: string;
    lastName: string;
  }[];
};

const Persons = (props: PersonsProps) => {
  const { persons } = props;
  return (
    <div>
      <ul>
        {persons.map((person) => {
          return (
            <li>
              {person.firstName} {person.lastName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Persons;
