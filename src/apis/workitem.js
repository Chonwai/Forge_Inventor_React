import axios from '../utils/request';

class WorkitemAPIs {
    static async getWorkitemStatus(data) {
        try {
            const res = await axios.get(`da/us-east/v3/workitems/${data}`);
            console.log(res.data);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async sendWorkitem(inputIpt, outputIpt, data) {
        let body = {
            activityId: 'Edison.ChangeParamActivity+my_current_version',
            arguments: {
                InventorDoc: {
                    url: inputIpt,
                },
                InventorParams: {
                    url: `data:application/json,{"height":"${data.height} mm", "width": "${data.width} mm"}`,
                },
                OutputIpt: {
                    url: outputIpt,
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
}

export default WorkitemAPIs;
