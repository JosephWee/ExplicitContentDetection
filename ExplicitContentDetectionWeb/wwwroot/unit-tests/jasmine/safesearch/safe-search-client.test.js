// safe-search-client.test.js - The Jasmine test specs
//const expect = chai.expect; // Using Chai's expect interface
//import SafeSearchClient from '/unit-tests/safesearch/safe-search-client.js'; // Importing the code to be tested

describe('SafeSearchClient Class', function () {
    let unitUnderTest = new SafeSearchClient();
    
    beforeEach(function () {
        
    });

    it('should have 1 or more valid urls', function () {

        let inputs = $("#divImageUrls").find("input.imageUrl");

        expect(typeof inputs === "object").toEqual(true);
        expect(typeof inputs.length === "number").toEqual(true);
        expect(inputs.length > 0).toEqual(true);

        let urls = [];
        for (var i = 0; i < inputs.length; i++) {

            let url = ($(inputs[i]).val() + "").trim();
            if (typeof url === "string" && url.length > 0) {
                urls.push(url);
            }
        }

        expect(urls.length > 0).toEqual(true);

        if (window.console && typeof window.console.log === "function")
            console.log(urls);

        unitUnderTest.readUrlsAsBase64(urls).then((imgs) => {

            if (window.console && typeof window.console.log === "function")
                console.log(imgs);

            let divImages = $("#divImages").empty();

            for (var i = 0; i < imgs.length; i++) {

                let img = $('<div><img src="' + imgs[i].base64Data + '" alt="' + imgs[i].url + '" width="320" ></div>');
                divImages.append(img);
            }
        });
    });

    //it('should be able to play a Song', function () {
    //    player.play(song);
    //    expect(player.currentlyPlayingSong).toEqual(song);

    //    // demonstrates use of custom matcher
    //    expect(player).toBePlaying(song);
    //});

    //describe('when song has been paused', function () {
    //    beforeEach(function () {
    //        player.play(song);
    //        player.pause();
    //    });

    //    it('should indicate that the song is currently paused', function () {
    //        expect(player.isPlaying).toBeFalsy();

    //        // demonstrates use of 'not' with a custom matcher
    //        expect(player).not.toBePlaying(song);
    //    });

    //    it('should be possible to resume', function () {
    //        player.resume();
    //        expect(player.isPlaying).toBeTruthy();
    //        expect(player.currentlyPlayingSong).toEqual(song);
    //    });
    //});

    //// demonstrates use of spies to intercept and test method calls
    //it('tells the current song if the user has made it a favorite', function () {
    //    spyOn(song, 'persistFavoriteStatus');

    //    player.play(song);
    //    player.makeFavorite();

    //    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
    //});

    ////demonstrates use of expected exceptions
    //describe('#resume', function () {
    //    it('should throw an exception if song is already playing', function () {
    //        player.play(song);

    //        expect(function () {
    //            player.resume();
    //        }).toThrowError('song is already playing');
    //    });
    //});
});
