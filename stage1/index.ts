import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrYXJ0aWsuMjNiMDEwMTAxN0BhYmVzLmFjLmluIiwiZXhwIjoxNzgwOTg4ODMwLCJpYXQiOjE3ODA5ODc5MzAsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI4MzExOTJjNC00N2Y3LTRhYWMtYjM0Zi1mNDM4YTY0OGY0NDQiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJrYXJ0aWsgY2hhdWRoYXJ5Iiwic3ViIjoiY2RhNTQyMWYtYmUzNS00MWY1LWI1ZjQtNjMxNWVlYjg4ZWExIn0sImVtYWlsIjoia2FydGlrLjIzYjAxMDEwMTdAYWJlcy5hYy5pbiIsIm5hbWUiOiJrYXJ0aWsgY2hhdWRoYXJ5Iiwicm9sbE5vIjoiMjMwMDMyMDEwMDExNCIsImFjY2Vzc0NvZGUiOiJjWHVxaHQiLCJjbGllbnRJRCI6ImNkYTU0MjFmLWJlMzUtNDFmNS1iNWY0LTYzMTVlZWI4OGVhMSIsImNsaWVudFNlY3JldCI6ImN4VlBkdW1USlJ3cldOSkIifQ.OVO9eRsmW3E3lnscjrKs-G7gw-WZr-hxOr8i5UO9cjQ";

async function getNotifications() {
  const response = await axios.get(
    "http://4.224.186.213/evaluation-service/notifications",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );

  console.log(response.data);
}

getNotifications();