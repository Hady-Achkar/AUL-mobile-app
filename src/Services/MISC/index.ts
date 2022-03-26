import axios from 'axios';
import { registerForPushNotificationsAsync } from '../../actions/Suggestions.actions';
import { ApiConstants } from '../../Constants';

export const AddToken = async () => {
  try {
    const token = await registerForPushNotificationsAsync();
    return axios({
      method: 'POST',
      url: `${ApiConstants.ADD_TOKEN}?token=${token}`,
    });
  } catch (err) {
    console.log(err.response.data);
  }
};
