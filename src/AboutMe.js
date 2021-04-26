import ItemDescription from "./ItemDescription";
import ItemPicture from "./ItemPicture";
import ItemTitle from "./ItemTitle";

import paysage2 from "./assets/img/paysage2.jpeg";

const AboutMe = (props) => {
  return (
    <div class="side">
      <ItemTitle title="About Me" />
      <ItemPicture img={paysage2} />
      <ItemDescription description="Cras interdum pharetra felis eu faucibus." />
    </div>
  );
};

export default AboutMe;
