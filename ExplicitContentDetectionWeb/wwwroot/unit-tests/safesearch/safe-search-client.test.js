// ExampleUnitUnderTest.test.js - The Mocha test script
const expect = chai.expect; // Using Chai's expect interface
import SafeSearchClient from '/unit-tests/safesearch/safe-search-client.js'; // Importing the code to be tested

async function loadImages(urls) {

    let images = [];

    for (var i = 0; i < urls.length; i++) {
        try {
            const response = await fetch(urls[i]);

            if (response.ok) {

                const blob = await response.blob();
                const objectURL = URL.createObjectURL(blob);

                let entry = {};
                entry["url"] = urls[i];
                entry["objectURL"] = objectURL;

                images.push(entry);
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    return images;
}

describe('SafeSearchClient Class', function () {
    let unitUnderTest = new SafeSearchClient();
    let images = [];

    // beforeEach hook runs before each test in this suite
    beforeEach(function () {
        // Create a fresh instance for each test
    });

    it('should have 1 or more valid urls', function () {
        
        let inputs = $("#divImageUrls").find("input.imageUrl");

        expect(typeof inputs !== "null").to.equal(true);
        expect(typeof inputs !== "undefined").to.equal(true);
        expect(typeof inputs.length === "number").to.equal(true);
        expect(inputs.length > 0).to.equal(true);

        let urls = [];
        for (var i = 0; i < inputs.length; i++) {

            let url = ($(inputs[i]).val() + "").trim();
            if (typeof url === "string" && url.length > 0) {
                urls.push(url);
            }
        }

        expect(urls.length > 0).to.equal(true);

        if (window.console && typeof window.console.log === "function")
            console.log(urls);

        loadImages(urls)
            .then((imgs) => {
                images = imgs;

                expect(images.length > 0).to.equal(true);

                if (window.console && typeof window.console.log === "function")
                    console.log(images);

                let divImages = $("#divImages").empty();

                for (var i = 0; i < imgs.length; i++) {

                    let img = $('<div><img src="' + imgs[i].objectURL + '" alt="' + imgs[i].url + '" width="320" ></div>');
                    divImages.append(img);
                }
            });
    });

    //it('should be able to load images', function () {

    //    let imgTags = $("#divImages").children();

    //    if (window.console && typeof window.console.log === "function")
    //        console.log(imgTags);

    //    //expect(imgTags.length > 0).to.equal(true);
    //});

    //it('should push the item', function () {

    //    let val = Math.floor(Math.random() * 1000000);
    //    expectedValues.push(val);
    //    unitUnderTest.push(val);

    //    expect(unitUnderTest.getCount()).to.equal(expectedValues.length);
    //    expect(unitUnderTest.getItem(unitUnderTest.getCount() - 1)).to.equal(expectedValues[expectedValues.length - 1]);
    //});

    //it('should pop the item', function () {        

    //    let expected = expectedValues.pop();
    //    let actual = unitUnderTest.pop();

    //    expect(expected).to.equal(actual);
    //    expect(unitUnderTest.getCount()).to.equal(expectedValues.length);
    //});
});