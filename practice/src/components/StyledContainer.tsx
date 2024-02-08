type StyledContainer = {
  styles: React.CSSProperties;
};

const StyledContainer = (props: StyledContainer) => {
  return <div style={props.styles}>This is a styled container</div>;
};

export default StyledContainer;
