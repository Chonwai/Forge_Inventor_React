import axios from '../utils/request';
import Utils from '../utils/utils';

class AuthAPIs {
    static async getAccessToken() {
        let body = {
            client_id: process.env.REACT_APP_CLIENT_ID,
            client_secret: process.env.REACT_APP_CLIENT_SECRET,
            grant_type: process.env.REACT_APP_GRANT_TYPE,
            scope: process.env.REACT_APP_SCOPE,
        };
        let formData = Utils.getFormData(body);
        console.log(body);
        try {
            const res = await axios.post('authentication/v1/authenticate', formData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
}

export default AuthAPIs;
