// function first (arr,num){
//   let result = [];

//   for (let i = arr.length-1;i>=-1;i--){
//     console.log("i"+i);

//     result.unshift(arr[i]);
//     if(result.length == num){
//       return result;
//     }

//   }
// }
// console.log(first([11,22,13,4],4))


// פיתרון תרגיל 1
// function firstWord(str) {
//   let newString = "";
//   let arr = str.split(" ");
//   newString = arr[0];
//   return newString;
// }
// console.log(firstWord("greetings, friends"))


// פיתרון תרגיל 2
function betweenMarks(str, first, last) {
    let result = " ";
    let start = str.indexOf(first) + 1;
    let end = str.indexOf(last);
    if (end == -1) {
      end = str.length;
    }
    if (start > end) {
      return "";
    }
    console.log("start=" + start);
    for (let i = start; i < end; i++) {
      result += str[i];
    }
    return result;
  }
  console.log(betweenMarks('what is >apple<', '>', '<'));
  
  // פיתרון תרגיל 3
  
  function findinarray(arr) {
    let result = [];
    result.push(arr[0], arr[2], arr[arr.length - 2]);
    return result;
  }
  console.log(findinarray([1, 2, 3, 4, 5, 6, 7, 9]))
  
  //  25. 9 - פיתרון תרגיל 3
  
  booksList = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: false },
    { title: "Harry Potter and the Philosopher's Stone", author: "J. K. Rowling", alreadyRead: true },
    { title: "Gone Girl", author: "Gillian Flynn", alreadyRead: false }
  ];
  function show(arr) {
    let str = "";
    for (let i of arr) {
      if (i.alreadyRead == true) {
        str = `you already Read ${i.title} by ${i.author}`;
      }
      else {
        str = `you still need to read ${i.title} by ${i.author}`;
      }
      console.log(str);
    }
  }
  show(booksList)