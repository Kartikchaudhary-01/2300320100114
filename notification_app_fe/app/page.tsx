"use client";

import { useEffect, useState } from "react";

import { getNotifications }
from "../services/api";

import NotificationCard
from "../components/NotificationCard";

export default function Home() {

  const [notifications,
    setNotifications] =
    useState<any[]>([]);

  useEffect(() => {

    async function load() {

      const data =
        await getNotifications();

      setNotifications(data);

    }

    load();

  }, []);

  return (

    <div>

      <h1>
        Notifications
      </h1>

      {
        notifications.map(
          (item) => (
            <NotificationCard
              key={item.ID}
              notification={item}
            />
          )
        )
      }

    </div>

  );
}