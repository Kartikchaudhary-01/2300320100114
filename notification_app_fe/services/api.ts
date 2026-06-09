import axios from "axios";

const API_URL =
  "http://4.224.186.213/evaluation-service/notifications";

const TOKEN =
  process.env.NEXT_PUBLIC_TOKEN;

export async function getNotifications(
  page = 1,
  limit = 10,
  type?: string
) {
  const response = await axios.get(
    API_URL,
    {
      params: {
        page,
        limit,
        notification_type: type
      },
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    }
  );

  return response.data.notifications;
}