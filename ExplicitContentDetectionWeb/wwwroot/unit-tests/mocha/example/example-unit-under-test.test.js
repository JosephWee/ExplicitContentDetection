// ExampleUnitUnderTest.test.js - The Mocha test script
const expect = chai.expect; // Using Chai's expect interface
import ExampleUnitUnderTest from '/unit-tests/mocha/example/example-unit-under-test.js'; // Importing the code to be tested

describe('ExampleUnitUnderTest Class', function () {
    let unitUnderTest = new ExampleUnitUnderTest();
    let expectedValues = [];

    // beforeEach hook runs before each test in this suite
    beforeEach(function () {
        // Create a fresh instance for each test
    });

    it('should start empty', function () {

        expect(unitUnderTest.getCount()).to.equal(0);
    });

    it('should push the item', function () {

        let val = Math.floor(Math.random() * 1000000);
        expectedValues.push(val);
        unitUnderTest.push(val);

        expect(unitUnderTest.getCount()).to.equal(expectedValues.length);
        expect(unitUnderTest.getItem(unitUnderTest.getCount() - 1)).to.equal(expectedValues[expectedValues.length - 1]);
    });

    it('should pop the item', function () {        

        let expected = expectedValues.pop();
        let actual = unitUnderTest.pop();

        expect(expected).to.equal(actual);
        expect(unitUnderTest.getCount()).to.equal(expectedValues.length);
    });
});