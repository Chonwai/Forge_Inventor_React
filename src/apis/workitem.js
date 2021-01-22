import axios from '../utils/request';

class WorkitemAPIs {
    static async sendWorkitem(data) {
        let body = {
            activityId: 'Edison.ChangeParamActivity+my_current_version',
            arguments: {
                InventorDoc: {
                    url:
                        'https://developer.api.autodesk.com/oss/v2/signedresources/d7afbfba-e30b-441a-ada1-43201b72c76b?region=US',
                },
                InventorParams: {
                    url: `data:application/json,{\"height\":\"${data.height} in\", \"width\":\"${data.width} in\"}`,
                },
                OutputIpt: {
                    url:
                        'https://developer.api.autodesk.com/oss/v2/signedresources/55e52faa-df9f-43a5-8513-8e1e7142d162?region=US',
                    verb: 'put',
                },
            },
        };
        try {
            const res = await axios.post('da/us-east/v3/workitems', body);
            console.log(res.data);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async checkWorkitemStatus(data) {
        try {
            const res = await axios.get(`da/us-east/v3/workitems/${data}`);
            console.log(res.data);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default WorkitemAPIs;
