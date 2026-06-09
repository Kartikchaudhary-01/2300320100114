import axios from "axios";

interface Notification {
  ID: string;
  Type: string;
  Message: string;
  Timestamp: string;
}

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrYXJ0aWsuMjNiMDEwMTAxN0BhYmVzLmFjLmluIiwiZXhwIjoxNzgwOTkwNjIyLCJpYXQiOjE3ODA5ODk3MjIsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI1Y2Q4MTUwNi0xNjBmLTQzNTItOTk1My05NmJjMGM4ZWVmMjciLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJrYXJ0aWsgY2hhdWRoYXJ5Iiwic3ViIjoiY2RhNTQyMWYtYmUzNS00MWY1LWI1ZjQtNjMxNWVlYjg4ZWExIn0sImVtYWlsIjoia2FydGlrLjIzYjAxMDEwMTdAYWJlcy5hYy5pbiIsIm5hbWUiOiJrYXJ0aWsgY2hhdWRoYXJ5Iiwicm9sbE5vIjoiMjMwMDMyMDEwMDExNCIsImFjY2Vzc0NvZGUiOiJjWHVxaHQiLCJjbGllbnRJRCI6ImNkYTU0MjFmLWJlMzUtNDFmNS1iNWY0LTYzMTVlZWI4OGVhMSIsImNsaWVudFNlY3JldCI6ImN4VlBkdW1USlJ3cldOSkIifQ.1Jl1y3SOtQYDYLqeZEW_jpnUjlDt_sdox3c5Edo1R14";

const PRIORITY: Record<string, number> = {
  Placement: 3,
  Result: 2,
  Event: 1
};

async function getTopNotifications() {
  try {

    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );

    const notifications: Notification[] = response.data.notifications;

    const sorted = notifications.sort((a, b) => {
        const priorityDiff = PRIORITY[b.Type] - PRIORITY[a.Type];

        if (priorityDiff !== 0) {
          return priorityDiff;
        }

        return new Date(b.Timestamp).getTime() - new Date(a.Timestamp).getTime()
      }
    );

    const top10 = sorted.slice(0, 10);

    console.log(
      "\n===== TOP 10 PRIORITY NOTIFICATIONS =====\n"
    );

    top10.forEach((item, index) => {
      console.log(`${index + 1}. ${item.Type} | ${item.Message} | ${item.Timestamp}`);
    });
  }
  catch (error) {
    console.error(error);
  }
}

getTopNotifications();
