// import { showAlert } from './util.js';
import { showFullErrorMessage, closeMessageHandler, errorMessageBtn } from './util.js';
import { BASE_URL, Route, Method, ErrorText } from './api-data.js';

const load = (route, errorText, method = Method.GET, body = null) => fetch(
  `${BASE_URL}${route}`, { method, body })
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  })
  .catch(() => {
    showFullErrorMessage();
    closeMessageHandler(errorMessageBtn);
  });

const getData = () => load(Route.GET_DATA, ErrorText.GET_DATA);

const sendData = (body) => load(Route.SEND_DATA, ErrorText.SEND_DATA, Method.POST, body);

export { getData, sendData };
