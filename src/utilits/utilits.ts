import { Transaction } from "../types/stylesTypes";

const startObj = {
  id: "",
  status: "",
  type: "",
  name: "",
  amount: "",
};

export const filler = (number: number) => {
  return Array(number).fill(startObj);
};

export const correctPagination = (
  array: Transaction[],
  page: number,
  count: number
) => {
  const indexOfLastItem = page * count;
  const indexOfFirstItem = indexOfLastItem - count;
  let result = array.slice(indexOfFirstItem, indexOfLastItem);

  if (result.length < count) {
    result = result.concat(filler(count - result.length));
  }
  return result;
};

export const arrayCreator = (array: string[][]) => {
  const [title, ...rest] = array;
  return rest.map((elem) => {
    return {
      id: elem[0],
      status: elem[1],
      type: elem[2],
      name: elem[3],
      amount: elem[4],
    };
  });
};
