const Button = ({ children, color, size }) => {
  return (
    <button style={{ color, fontSize: size == "large" ? "24px" : "16px" }}>
      {children}
    </button>
  );
};

const RedButton = ({ isLarge }) => {
  return (
    <Button color="red" size={isLarge ? "large" : "small"}>
      I am a Red Button
    </Button>
  )
};

// Issue: `Button` and `RedButton` are not substitutable due to "isLarge" prop.
export default LiskovSubstitutionPrinciple = () => {
  return (
    <div>
      <RedButton isLarge={true} />
    </div>
  );
};
