type HeaderParent = {
  children: React.ReactNode;
};

const HeaderParent = (props: HeaderParent) => {
  return <div>{props.children}</div>;
};

export default HeaderParent;
