//paginate function 
import _ from "loadash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  //converting array to a loadash wrapper and chain two loadash methods on it
  //slice method to slice array from startIndex and retun new array
  //.value method to return the wrapper into regular array
  

  return _(items).slice(startIndex).take(pageSize).value();

 
}
