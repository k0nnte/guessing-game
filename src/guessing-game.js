class GuessingGame {
    constructor() {
        this.mas = [];
    }

    setRange(min, max) {
        this.mas = [];
        for(let i = min; i<=max;i++){
            this.mas.push(i);
        }
    }

    guess() {
        return this.mas[Math.floor(this.mas.length/2)];
    }

    lower() {
        this.setRange(this.mas[0],this.mas[Math.floor(this.mas.length/2)]);
    }

    greater() {
        this.setRange(this.mas[Math.floor(this.mas.length/2)],this.mas[this.mas.length-1]);
    }
}

module.exports = GuessingGame;
