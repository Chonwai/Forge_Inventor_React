import axios from '../utils/request';
import { v4 as uuidv4 } from 'uuid';

class ObjectAPIs {
    static async getTemporaryDownloadURL(data) {
        try {
            const res = await axios.post('oss/v2/buckets/edison_bucket/objects/box.ipt/signed');
            console.log(res.data);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
    static async getTemporaryUploadURLforOutputIPTFile(data) {
        try {
            const id = uuidv4();
            const res = await axios.post(
                `https://developer.api.autodesk.com/oss/v2/buckets/edison_bucket/objects/${id}.ipt/signed?access=readwrite`
            );
            console.log(res.data);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default ObjectAPIs;
