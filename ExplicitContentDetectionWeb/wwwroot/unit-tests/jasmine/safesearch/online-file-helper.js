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

    async readUrlAsBase64(url) {

        let result = null;

        try {
            const response = await fetch(url);

            if (response.ok) {

                const blob = await response.blob();
                //const blobUrl = URL.createObjectURL(blob);

                const base64Data = await this.readBlobUrlAsBase64(blob);

                let entry = {};
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

        let result = [];

        for (var i = 0; i < urls.length; i++) {
            const urlResult = await this.readUrlAsBase64(urls[i]);
            result.push(urlResult);
        }

        return result;
    }
}

//export default OnlineFileHelper;

//export {
//    OnlineFileHelper
//};