const filterByExpiration = items => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let resultItems = items.reduce((acc, next) => {
    if (filterArrItems(createArrItems(next))) {
      debugger;
      acc.push(next);
      return acc;
    }
    return acc;
  }, []);
  function createArrItems(item) {
    let arrItems = item.expirationDate.split("-");
    return arrItems;
  }
  function filterArrItems(arrItem) {
    let [m, d, y] = arrItem;
    if (y > year) {
      return true;
    } else if (y == year) {
      if (m > month) {
        return true;
      } else if (m == month) {
        if (d > day) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  console.log(resultItems);
  return resultItems;
};
