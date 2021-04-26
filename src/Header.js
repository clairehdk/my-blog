import Baseline from "./Baseline";
import Title from "./Title";

const Header = (props) => {
  return (
    <div class="header">
      <Title title="My Blog" />
      <Baseline text="My awesome Baseline" />
    </div>
  );
};

export default Header;
