<!-- Backend Implementation -->
<!-- Overview -->

For this task, I built a simple notification processing system that retrieves notifications from the provided API and displays the most important notifications based on the priority rules given in the problem statement.

The application first fetches all notifications from the API using Bearer Token authentication. After receiving the data, it assigns a priority value to each notification type and sorts the notifications accordingly.

<!-- Priority Assignment -->

The following priority values were used:

Placement = 3
Result = 2
Event = 1

This means Placement notifications are considered the most important, followed by Result notifications and then Event notifications.

<!-- Sorting Logic -->

After assigning priorities, the notifications are sorted using two conditions:

Priority (highest priority first)
Timestamp (latest notification first)

For example, all Placement notifications appear before Result notifications, and if two notifications have the same type, the newer notification is displayed first.

<!-- Retrieving Top Notifications -->

Once the notifications are sorted, only the top 10 notifications are selected and displayed.

This was implemented by sorting the notification list and then selecting the first 10 entries from the sorted result.

<!-- API Integration -->

The notification data is fetched from the provided evaluation API.

Since the API is protected, authentication is performed using a Bearer Token. The token is generated through the authentication endpoint and then included in the Authorization header while requesting notifications.

<!-- Frontend Implementation -->
For the frontend, a Next.js application was developed using TypeScript and Material UI.

The application consists of two main pages:

1. Notifications Page
    - Displays notifications retrieved from the API.
    - Shows notification message, type, and timestamp.
    - Displays notifications sorted according to the priority rules defined in Stage 1.
2. User Experience Features
    - static layout for desktop and mobile devices.
    - Clear card-based presentation of notifications.

The frontend communicates with the provided notification API using Bearer Token authentication and presents the processed information in a user-friendly manner.