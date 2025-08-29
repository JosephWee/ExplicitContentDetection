// ExampleUnitUnderTest.js - The code to be tested
export default class ExampleUnitUnderTest {
    constructor() {
        this.messages = [];
    }

    push(message) {
        return this.messages.push(message);
    }

    pop() {
        return this.messages.pop();
    }

    getCount() {
        return this.messages.length;
    }
}