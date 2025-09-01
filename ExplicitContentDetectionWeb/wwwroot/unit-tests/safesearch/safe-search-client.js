// safe-search-client.js - The code to be tested
export default class SafeSearchClient {
    constructor() {
        this.messages = [];
    }

    push(message) {
        return this.messages.push(message);
    }

    pop() {
        return this.messages.pop();
    }

    getItem(index) {
        if (index < 0 || index >= this.messages.length)
            return null;

        return this.messages[index];
    }

    getCount() {
        return this.messages.length;
    }
}

export {
    SafeSearchClient
};