const filterByExpiration = items => {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let resultItems = items.reduce((acc, next) => {
    if (filterArrItems(createArrItems(next))) {
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
    let date = new Date();
    date.setFullYear(y);
    date.setMonth(+m - 1);
    date.setDate(d);
    if (today < date) {
      return true;
    } else {
      return false;
    }
  }
  console.log(resultItems);
  return resultItems;
};
