const Button = ({ children, color, size }) => {
  return (
    <button style={{ color, fontSize: size == "large" ? "24px" : "16px" }}>
      {children}
    </button>
  );
};

const RedButton = ({ size }) => {
  return (
    <Button color="red" size={size}>
      I am a Red Button
    </Button>
  )
};

export default LiskovSubstitutionPrinciple = () => {
  return (
    <div>
      <RedButton size="large" />
    </div>
  );
};
