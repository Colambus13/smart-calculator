class SmartCalculator {
    constructor(initialValue) {
        this.initialValue = initialValue;
        this.toString = function(){
            return eval(this.initialValue);
        }
    }

    add(number){
        this.initialValue += '+' + number;
        return this;
    }

    subtract(number){
        this.initialValue += '-' + number;
        return this;
    }

    multiply(number){
        this.initialValue += '*' + number;
        return this;
    }

    devide(number){
        this.initialValue += '/' + number;
        return this;
    }

    pow(number){
        this.initialValue += '**' + number;
        return this;
    }
}

module.exports = SmartCalculator;