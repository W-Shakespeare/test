import React from "react";
import HotdogsListRow from "./HotdogsListRow";

function HotdogsListComponent({ arr }) {
  return (
    <section className="hotdogs-list">
      {arr.map(item => {
        return <HotdogsListRow className="hotdogs-list-row" item={item} />;
      })}
    </section>
  );
}

export default HotdogsListComponent;
