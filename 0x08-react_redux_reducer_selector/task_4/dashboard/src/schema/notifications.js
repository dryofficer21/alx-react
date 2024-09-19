import * as notificationList from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';


const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
    author: user,
    context: message,
});

export const normalizedData = normalize(notificationList, [notification]);

const getAllNotificationsByUser = (userId) => {
    const output = [];
    const notifications = normalizedData.entities.notification;
    const messages = normalizedData.entities.messages;
  
    for (const id in notifications) {
      if (notifications[id].author === userId) {
        output.push(messages[notifications[id].context]);
      }
    }
  
    return output;
}

export const notificationsNormalizer = (data) => {
  const normalizedData = normalize(data, [notification]);
  return normalizedData.entities;
}

export default getAllNotificationsByUser;
