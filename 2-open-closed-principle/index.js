const Title = ({ title, type, href, buttonText, onClick }) => {
  return (
    <div>
      <h1>{title}</h1>
      {
        type == "withLinkButton" && (
          <div>
            <a href={href}>{buttonText}</a>
          </div>
        )
      }
      {
        type == "withNormalButton" && (
          <button onClick={onClick}>
            {buttonText}
          </button>
        )
      }
    </div>
  );
};

export default OpenClosedPrinciple = () => {
  return (
    <div>
      <Title
        title="Open-Closed Principle"
        type="withLinkButton"
        buttonText="Click me"
        href="https://api.com"
        onClick={() => alert("Hello world")}
      />
      <Title
        title="Open-Closed Principle"
        type="withNormalButton"
        buttonText="Click me"
        href="https://api.com"
        onClick={() => alert("Hello world")}
      />
    </div>
  )
};
