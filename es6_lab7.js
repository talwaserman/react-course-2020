// Question 1 - part 1
class LightBulb {
    constructor(divElem) {
        this.divElem = divElem;
        this.originalColor = divElem.style.backgroundColor;
        this.switchButton = document.getElementById('light-switch');
        this.init();
    }

    on = () => this.divElem.style.backgroundColor = 'yellow';
    off = () => this.divElem.style.backgroundColor = this.originalColor;
    init = () => {
        this.switchButton.addEventListener('click', () => {
            const currentColor = this.divElem.style.backgroundColor;
            (currentColor === this.originalColor) ? this.on() : this.off();
        });
    }
    
}


var elem = document.getElementById('light-box');

var lightBulb = new LightBulb(elem);
lightBulb.on();
lightBulb.off();



// Question 1 - part 2
class LightBulb2 {
    constructor(divElem) {
        this.divElem = divElem[0];
        this.top =     this.divElem.getElementsByClassName('top')[0];
        this.bottom =  this.divElem.getElementsByClassName('bottom')[0];
        this.originalColorTop =     this.top.style.backgroundColor;
        this.originalColorBottom =  this.bottom.style.backgroundColor;
        this.init();
    }

    onTop = () => this.top.style.backgroundColor = 'yellow';
    onBottom = () => this.bottom.style.backgroundColor = 'yellow';
    offTop = () => this.top.style.backgroundColor = this.originalColorTop;
    offBottom = () => this.bottom.style.backgroundColor = this.originalColorBottom;
    init = () => {
        this.top.addEventListener('click', () => {
            const currentColor = this.top.style.backgroundColor;
            if ((currentColor === this.originalColorTop)) {
                this.onTop();
                this.offBottom();
            } else {
                this.onBottom();
                this.offTop();
            } 
        });
        this.bottom.addEventListener('click', () => {
            const currentColor = this.bottom.style.backgroundColor;
            if (currentColor === this.originalColorBottom) {
                this.onBottom();
                this.offTop();
            } else {
                this.onTop();
                this.offBottom();
            }
        });
    }
    
}


var elem2 = document.getElementsByClassName('mega-light');
var lightBulb2 = new LightBulb2(elem2);



// Question 2
class Car {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
}

class Race {
    constructor(car1, car2) {
        this.carsInRace = [car1, car2];
    }

    add = (newRacer) => {
        this.carsInRace.push(newRacer);
    }

    getWinner = () => {
        let maxSpeed = 0;
        let winnerName = this.carsInRace[0].name;

        this.carsInRace.forEach(item => {
            if (maxSpeed <= item.speed) {
                maxSpeed = item.speed;
                winnerName = item.name;
            }
        });

        return winnerName;
    }
}

const c1 = new Car('blue', 20);
const c2 = new Car('green', 30);
const c3 = new Car('red', 24);

const race = new Race(c1, c2);
race.add(c3);

// prints: And the winner is... green
console.log(race.getWinner());




// Question 3
class AutoBind {
    constructor() {
    }

    inc = () => {
        this.btn.textContent++;
    }
}

class Counter extends AutoBind {
    constructor(btn) {
      super();
      this.btn = btn;
      this.btn.textContent = '0';
      btn.addEventListener('click', this.inc);
    }
    
    inc() {
      this.btn.textContent++;
    }
  }
  
const c = new Counter(document.querySelector('button'));