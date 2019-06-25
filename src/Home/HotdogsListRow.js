import React from "react";
import HotdogsDescription from "./HotdogsDescription";
import HotdogsImg from "./HotdogsImg";

function HotdogsListRow({ className, item }) {
  //console.log(item);
  return (
    <div className={className}>
      <HotdogsDescription
        itemDescription={item.description}
        itemName={item.name}
      />
      <HotdogsImg item={item.backgroundURL} />
    </div>
  );
}

export default HotdogsListRow;
