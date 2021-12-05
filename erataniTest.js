/* soal no. 2 */
const numbers = [8, 2, 20, -7, 25, -1, 5];

function sorting(data) {
  let newData = data.sort(function (a, b) {
    return a - b;
  });
  return newData;
}

console.log(sorting(numbers), "result soal no.2");


/* soal no. 3 */
const strArray = [
  "Danawi Liam",
  "Tarjaya",
  "Daruna",
  "Warsoni",
  "John Wick",
  "Hadi PS",
  "Derian Lekso",
];

function searchingInArray(search, data) {
  let result = [];

  data.forEach((list) => {
    if (list.toLocaleLowerCase().search(search.toLocaleLowerCase()) > -1) {
      result.push(list);
    }
  });

  return result;
}

console.log(searchingInArray("da", strArray), "result soal no. 3");
