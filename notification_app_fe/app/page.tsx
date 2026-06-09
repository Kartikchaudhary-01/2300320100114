import axios from "axios";

export default async function Home() {

  const response = await axios.get(
    "http://4.224.186.213/evaluation-service/notifications",
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
      }
    }
  );

  const notifications =
    response.data.notifications;

  return (
    <div>
      <h1>Notifications</h1>

      {notifications.map((item: any) => (
        <div
          key={item.ID}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px"
          }}
        >
          <h3>{item.Message}</h3>

          <p>{item.Type}</p>

          <p>{item.Timestamp}</p>
        </div>
      ))}
    </div>
  );
}