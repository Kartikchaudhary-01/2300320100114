type Props = {
  notification: any;
};

export default function NotificationCard({
  notification
}: Props) {

  return (

    <div
      style={{
        border: "1px solid gray",
        padding: "12px",
        marginBottom: "10px"
      }}
    >
      <h3>{notification.Message}</h3>

      <p>
        Type: {notification.Type}
      </p>

      <p>
        {notification.Timestamp}
      </p>
    </div>

  );
}