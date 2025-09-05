// online-file-helper.js - The code to be tested
class OnlineFileHelper {
    constructor() {
        //this.messages = [];
    }

    async readBlobUrlAsBase64(blob) {

        const reader = new FileReader();

        await new Promise((resolve, reject) => {
            reader.onload = resolve;
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });

        //let base64Data = reader.result.replace(/^data:.+;base64,/, '');
        let base64Data = reader.result;

        return base64Data;
    }

    async readUrlAsBase64(index, url) {

        let result = null;

        try {
            const response = await fetch(url);

            if (response.ok) {

                const blob = await response.blob();
                //const blobUrl = URL.createObjectURL(blob);

                const base64Data = await this.readBlobUrlAsBase64(blob);

                let entry = {};
                entry["index"] = index;
                entry["url"] = url;
                entry["base64Data"] = base64Data;

                result = entry;
            }
        } catch (error) {
            console.error(error.message);
        }

        return result;
    }

    async readUrlsAsBase64(urls) {

        let promises = [];

        for (var i = 0; i < urls.length; i++) {

            promises.push(this.readUrlAsBase64(i, urls[i]));

            if (window.console && typeof window.console.log === "function")
                console.log(`promise ${i}`);
        }

        let result = await Promise.all(promises);
        return result;
    }
}

class SafeSearchHelper {

    #onlineFileHelper;

    constructor() {
        
        this.#onlineFileHelper = new OnlineFileHelper();
    }

    async createSafeSearchRequest(urls) {

        let loadedImages = await this.#onlineFileHelper.readUrlsAsBase64(urls);

        let requestCollectionObj = {};
        requestCollectionObj.requests = [];

        let featureType = {};
        featureType.type = "SAFE_SEARCH_DETECTION";

        for (var i = 0; i < loadedImages.length; i++) {

            const pattern = new RegExp("^data:image/.*;base64,");
            let base64String = loadedImages[i].base64Data.replace(pattern, "");

            let requestObj = {};

            let imageObj = {};
            imageObj.content = base64String;

            requestObj.image = imageObj;

            requestObj.features = [];
            requestObj.features.push(featureType);

            requestCollectionObj.requests.push(requestObj);
        }

        return requestCollectionObj;
    }
}

//export default OnlineFileHelper;

//export {
//    OnlineFileHelper,
//    SafeSearchHelper
//};