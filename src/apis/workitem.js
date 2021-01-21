import axios from '../utils/request';

class WorkitemAPIs {
    static async sendWorkitem(data) {
        try {
            const res = await axios.post('da/us-east/v3/workitems');
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }
}

export default WorkitemAPIs;
