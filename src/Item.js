import paysage1 from "./assets/img/paysage1.jpeg";
import paysage3 from "./assets/img/paysage3.jpeg";

import ItemDescription from "./ItemDescription";
import ItemPicture from "./ItemPicture";
import ItemSubtitle from "./ItemSubtitle";
import ItemTitle from "./ItemTitle";

const Item = (props) => {
  return (
    <div>
      <div class="item">
        <ItemTitle title="Title Heading" />
        <ItemSubtitle subtitle="Title description" />
        <ItemPicture img={paysage1} />
        <ItemDescription description="Mauris consectetur tincidunt magna. Donec nec ipsum sem. Donec lacus nunc, pretium et erat vel, accumsan ullamcorper ipsum. Mauris non lobortis justo. Vivamus scelerisque, augue id aliquam aliquet, augue erat venenatis nulla, at ultrices nulla lectus id libero. Suspendisse sed elementum erat, quis porttitor tortor. In a congue neque." />
      </div>
      <div class="item">
        <ItemTitle title="Title Heading" />
        <ItemSubtitle subtitle="Title description" />
        <ItemPicture img={paysage3} />
        <ItemDescription description="Mauris consectetur tincidunt magna. Donec nec ipsum sem. Donec lacus nunc, pretium et erat vel, accumsan ullamcorper ipsum. Mauris non lobortis justo. Vivamus scelerisque, augue id aliquam aliquet, augue erat venenatis nulla, at ultrices nulla lectus id libero. Suspendisse sed elementum erat, quis porttitor tortor. In a congue neque." />
      </div>
    </div>
  );
};
export default Item;
