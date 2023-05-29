// Title now accepts "children" and can be composed into smaller and reusable components.
const Title = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

const TitleWithLinkButton = ({ title, buttonText, href }) => {
  return (
    <Title title={title}>
      <div>
        <a href={href}>{buttonText}</a>
      </div>
    </Title>
  );
};

const TitleWithNormalButton = ({ title, buttonText, onClick }) => {
  return (
    <Title title={title}>
      <button onClick={onClick}>
        {buttonText}
      </button>
    </Title>
  );
};

export default OpenClosedPrinciple = () => {
  return (
    <div>
      <TitleWithLinkButton
        title="Open-Closed Principle"
        buttonText="Click me"
        href="https://api.com"
      />
      <TitleWithNormalButton
        title="Open-Closed Principle"
        buttonText="Click me"
        onClick={() => alert("Hello world")}
      />
    </div>
  )
};
