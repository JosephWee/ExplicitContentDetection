// safe-search-client.test.js - The Jasmine test specs
//const expect = chai.expect; // Using Chai's expect interface
//import SafeSearchClient from '/unit-tests/safesearch/safe-search-client.js'; // Importing the code to be tested

describe('SafeSearch API Test', function () {

    function readUrls() {

        let urls = [];

        let inputs = $("#divImageUrls").find("input.imageUrl");

        for (var i = 0; i < inputs.length; i++) {

            let url = ($(inputs[i]).val() + "").trim();
            if (typeof url === "string" && url.length > 0) {
                urls.push(url);
            }
        }

        if (window.console && typeof window.console.log === "function")
            console.log(urls);

        return urls;
    }

    beforeEach(function () {
        
    });

    it('should have 1 or more valid urls', function (done) {

        let urls = readUrls();
        expect(urls.length > 0).toEqual(true);
        done();
    });

    it('should be able to load images', function (done) {

        let urls = readUrls();
        expect(urls.length > 0).toEqual(true);

        let onlineFileHelper = new OnlineFileHelper();

        onlineFileHelper.readUrlsAsBase64(urls).then((imgs) => {

            let loadedImages = [];

            if (window.console && typeof window.console.log === "function")
                console.log(imgs);

            loadedImages = imgs;
            expect(loadedImages.length > 0).toEqual(true);

            let divImages = $("#divImages").empty();

            for (var i = 0; i < imgs.length; i++) {

                let img = $('<div><img src="' + imgs[i].base64Data + '" alt="' + imgs[i].url + '" width="320" ></div>');
                divImages.append(img);
            }

            done();
        });

    });

    it('should be able to retrieve image annotations', function (done) {

        let urls = readUrls();
        expect(urls.length > 0).toEqual(true);

        let safeSearchHelper = new SafeSearchHelper();

        safeSearchHelper.createSafeSearchRequest(urls).then((req) => {

            let baseUrl = "https://localhost:7061";
            let route = "/SafeSearch/images:annotate";

            let data = JSON.stringify(req);

            if (window.console && typeof window.console.log === "function") {
                console.log(urls);
                console.log(req);
                console.log(data);
            }

            let jqxhr = $.ajax({
                async: true,
                url: baseUrl + route,
                method: "post",
                contentType: 'application/json',
                data: req,
                beforeSend: function (xhr, settings) {

                    if (window.console && typeof window.console.log === "function") {
                        console.log("beforeSend");
                        console.log(xhr);
                        console.log(settings);
                    }

                    //Access-Control-Allow-Origin
                    xhr.setRequestHeader("Access-Control-Allow-Origin: *");

                    //xhr.overrideMimeType("text/plain; charset=x-user-defined");
                }
            })
            .done(function (arg1, arg2) {

                if (window.console && typeof window.console.log === "function") {
                    console.log("success");
                    console.log(arg1);
                    console.log(arg2);
                }

                expect(typeof arg1 === "object").toEqual(true);

                done();
            })
            .fail(function (arg1, arg2) {

                if (window.console && typeof window.console.log === "function") {
                    console.log("error");
                    console.log(arg1);
                    console.log(arg2);
                }

                expect(false).toEqual(true);

                done();
            });
        });
    });
});
