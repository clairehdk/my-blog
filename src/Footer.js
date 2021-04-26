const Footer = (props) => {
  return (
    <div className="footer">
      Fait avec <span>{props.tech}</span> à <span>{props.formation}</span> par{" "}
      <span>{props.name}</span>
    </div>
  );
};

export default Footer;
