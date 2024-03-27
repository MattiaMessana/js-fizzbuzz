

const rowElem = document.querySelector(".row"); // object | null
console.log(rowElem);

for (let i = 1; i <= 100; i++) {
  console.log(i);
  let bgClass = "number"; 
  let txt = i;
  if( i % 3 === 0 && i % 5 === 0) {
    console.log("multiplo di entrambi");
    bgClass = "fizzbuzz";
    txt = "FizzBuzz";
  } else if (i % 5 === 0) {
    console.log("multiplo di 5");
    bgClass = "buzz";
    txt = "buzz";
  }  else if (i % 3 === 0) {
    console.log("multiplo di 3");
    bgClass = "fizz";
    txt = "fizz";
  } 
  const boxElem = `<div class="box ${bgClass}">${txt}</div>`; // string
  rowElem.innerHTML += boxElem;

// const boxElem = document.createElement("div"); // object
//   boxElem.innerHTML = txt;
//   boxElem.classList.add("box");
//   boxElem.classList.add(bgClass);
//   console.log(boxElem);
// 
//   boxElem.addEventListener("click", function() {
    // alert(`Ciao sono numero ${i} e sono ${bgClass}`);
//   });
//   per inserire l'elemento nell'elemento genitore in pagina 
//   rowElem.append(boxElem);

}
 