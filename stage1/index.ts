import axios from 'axios';

type NotificationType = 'placement' | 'result' | 'event';

interface Notification {
    id: number;
    type: NotificationType;
    message: string;
    timestamp: string;
}

const PRIORITY: Record<NotificationType, number> = {
    placement: 1,
    result: 2,
    event: 3
};

async function getTopNotifications(){
    try{
        const response = await axios.get<{ notifications: Notification[] }>(
            "http://4.224.186.213/evaluation-service/notifications"
        );
        const notifications: Notification[] = response.data.notifications;
        const sortedNotifications = notifications.sort((a, b) => {
            const priorityDiff = PRIORITY[b.type] - PRIORITY[a.type];
            if(priorityDiff !== 0){
                return priorityDiff;
            }
            return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();

        });
        const top10 = sortedNotifications.slice(0, 10);
        console.log("\ntop10\n");
        top10.forEach((item,index) => {
            console.log(`${index + 1}. ${item.message} (Type: ${item.type}, Timestamp: ${item.timestamp})`);
        });
    }catch(error){
        console.error("Error fetching notifications:", error);
    }
}

getTopNotifications();
