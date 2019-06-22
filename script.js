// item example
// {
//   name: 'Name',
//   description: 'Description',
//   expirationDate: '01-30-1999'
// }
const filterByExpiration = items => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  console.log(items);
  //debugger;
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
    //let resultItems = arrItem.forEach((item, i, arr) => {
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
    // });
  }

  console.log(resultItems);
  //console.log(arrItems);
  //console.log(year);
  //console.log(month);
  //console.log(day);
  return resultItems;
};
/*
let arr = [];
let obj1 = { d: 1 };
let obj2 = { d: 2 };
let obj3 = { d: 3 };
arr.push(obj1);
arr.push(obj2);
arr.push(obj3);
let ar = arr.reduce((ac, next) => {
  if (filters(next)) {
    ac.push(next);
    return ac;
  }
  return ac;
}, []);
function filters(i) {
  if (i.d > 2) {
    return true;
  }
}
console.log(ar);
*/
