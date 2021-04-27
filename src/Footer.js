const Footer = (props) => {
  return (
    <div className="footer">
      Fait avec <span>{props.tech}</span> à{" "}
      <a href="https://www.lereacteur.io/" target="_blank">
        {props.formation}
      </a>{" "}
      par{" "}
      <a href="https://github.com/clairehdk/" target="_blank">
        {props.name}
      </a>
    </div>
  );
};

export default Footer;
