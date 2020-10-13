// Question 1
var container = document.querySelector('div');

for (let i=0; i < 4; i++) {
  var btn = document.createElement('button');
  btn.addEventListener('click', function() {
    alert(i);
  });
  btn.textContent = i;
  container.appendChild(btn);
}

// Question 2
// inner x override the outer x since javascript uses lexical scopes
// and x is hoisted to the top of the block so the first console.log
// does not know what is x.
let x = 10;
console.log(x);
{
  
  let x = 5;
  console.log(x);
}

console.log(x);


// Question 3
const a = [10, 20];
Object.freeze(a);
a.push(30);