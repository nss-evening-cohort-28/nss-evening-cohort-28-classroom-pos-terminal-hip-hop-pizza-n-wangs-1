import client from '../utils/client';

const endpoint = client.databaseURL;

const letMeExportWithoutDefault = () => {
  console.warn('This is just here to avoid having to use export default since we know this file will have more than one function eventually. This is just to avoid refactoring down the line');
};

const getItems = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export { letMeExportWithoutDefault, getItems };
