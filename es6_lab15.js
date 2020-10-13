// Question 1
function printTimes(options) {
  // TODO - fill code (1 line) here
  const { times, text } = options;

  for (let i = 0; i < times; i++) {
    console.log(`${String(i + 1).padStart(2, '0')} ${text}`);
  }
}

// print 'hello world' ten times:
printTimes({ text: 'hello world', times: 10 });

// Question 2
function printTimes(options) {
  // TODO - fill code (1 line) here
  const { text, times } = { times: 5, ...options };

  for (let i = 0; i < times; i++) {
    console.log(`${String(i + 1).padStart(2, '0')} ${text}`);
  }
}

// print 'hello world' ten times:
printTimes({ text: 'hello world', times: 10 });

// Question 3
function printTimesFromWeirdDevelopersDownstairs(weirdOptions) {
  // TODO fill code (1 line) here
  const { text, times } = { ...weirdOptions, text: weirdOptions.title };
  printTimes({ text, times });
}

// Question 4
function fib(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

function timed(funcToRun) {
  this.funcToRun = funcToRun;

  return params => {
    const s0 = Date.now();
    console.log(this.funcToRun(params));
    const s1 = Date.now();
    console.log(`Took ${s1 - s0}ms`);
  };
}

const timedFib = timed(fib);
console.log(timedFib(40));


// Question 5
// [...arr2, 50] - creates a new allocation in memory.
// arr1.push(50) - extends the memory location.
// i don't know how i can prove it
let arr1 = [10, 20, 30, 40];
let arr2 = [10, 20, 30, 40];

arr1.push(50);
arr2 = [...arr2, 50];

console.log(arr1);
console.log(arr2);