/*
GET SINGLE ORDER, GET ORDERITEMS
*/

import { getItemsByOrderId } from './itemsData';
import { getSingleOrder } from './orderData';

const getOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(firebaseKey).then((orderObject) => {
    getItemsByOrderId(orderObject.orderItemsId)
      .then((orderItemsObject) => resolve({ ...orderObject, orderItemsObject }))
      .catch(reject);
  });
});

export default getOrderDetails;
