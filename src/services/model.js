import ObjectAPI from '../apis/object';
import DerivativeAPI from '../apis/derivative';
import WorkitemAPI from '../apis/workitem';
import { v4 as uuidv4 } from 'uuid';

class ModelService {
    static async waitWrokitem(workitem) {
        return await new Promise(resolve => {
            const workitemStatusFlag = setInterval(async () => {
                console.log('Workitem Status Flag');
                let status = await WorkitemAPI.getWorkitemStatus(workitem.id);
                console.log(status);
                if (status.status === 'success') {
                    resolve(status.status);
                    clearInterval(workitemStatusFlag);
                }
            }, 500);
        });
    }

    static async waitTranslateToSVF2(urn) {
        return await new Promise(resolve => {
            const translateStatusFlag = setInterval(async () => {
                console.log('Translate Status Flag');
                let status = await DerivativeAPI.getTheStatusOfTheTranslationJob(urn);
                console.log(status);
                if (status.status === 'success' || status.status === 'failed') {
                    resolve(status.status);
                    clearInterval(translateStatusFlag);
                }
            }, 500);
        });
    }

    static async editModel(data) {
        const id = uuidv4();
        console.log(id);
        let inputIpt = await ObjectAPI.getTemporaryDownloadURL();
        console.log(inputIpt.signedUrl);
        let outputIpt = await ObjectAPI.getTemporaryUploadURLforOutputIPTFile(id);
        console.log(outputIpt.signedUrl);
        let workitem = await WorkitemAPI.sendWorkitem(
            inputIpt.signedUrl,
            outputIpt.signedUrl,
            data
        );
        console.log(workitem);

        const waitWrokitemFlag = await this.waitWrokitem(workitem);

        console.log(waitWrokitemFlag);

        let urn = new Buffer(`urn:adsk.objects:os.object:edison_bucket/${id}.ipt`).toString(
            'base64'
        );
        let translate = await DerivativeAPI.translateToSVF2(urn);
        console.log(translate);

        const waitTranslateToSVF2Flag = await this.waitTranslateToSVF2(urn);
        console.log(waitTranslateToSVF2Flag);
        console.log(urn);
        return urn;
    }
}

export default ModelService;
