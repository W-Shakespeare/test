import React from "react";
import HotdogsListComponent from "./HotdogsListComponent";
class HotdogsListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filersItems: []
    };
    this.GetArrItemss();
  }

  render() {
    return <HotdogsListComponent arr={this.state.filersItems} />;
  }

  filterByExpiration = items => {
    let today = new Date();
    let resultItems = items.reduce((acc, next) => {
      if (compareDate(createArrItems(next))) {
        acc.push(next);
        return acc;
      }
      return acc;
    }, []);
    return resultItems;
    function createArrItems(item) {
      let arrItems = item.expirationDate.split("-");
      return arrItems;
    }
    function compareDate(arrItemDate) {
      let [m, d, y] = arrItemDate;
      let date = new Date();
      date.setFullYear(y);
      date.setMonth(+m - 1);
      date.setDate(d);
      return today < date;
    }
  };

  GetArrItemss = () => {
    fetch("https://formula-test-api.herokuapp.com/menu", {
      method: "GET"
    })
      .then(r => r.json())
      .then(res => {
        this.setState({ filersItems: this.filterByExpiration(res) });
      });
  };
}

export default HotdogsListContainer;
