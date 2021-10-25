function createCounter(initialValue) {

    counter = {

        defaultValue: 0,
        value: initialValue || defaultValue,

        showValue() {
            console.log(this.value);
        },

        increment(value) {
            if (value >= 1) {
                const temp = value;
                this.value += temp;
                console.log(this.value);
            }else {
                this.value++;
                console.log(this.value);
            }
        },

        decrement(value) {
            if (value >= 1) {
                const temp = value;
                this.value -= temp;
                console.log(this.value);
            }else {
                this.value--;
                console.log(this.value);
            }
        },

        discard() {
            this.value = this.defaultValue;
            console.log(this.value);
        }
    } 
}

createCounter(1);

counter.showValue(1)
counter.increment();
counter.increment(2);
counter.increment(5);
counter.decrement(2);
counter.decrement();

