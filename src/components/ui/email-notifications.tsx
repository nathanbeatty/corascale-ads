'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { notificationsData, NotificationData } from './data/notifications';

interface Notification extends NotificationData {
  id: number;
  time: string;
}

export default function EmailNotification() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const createNotification = () => {
      // Pick a random person from the data list
      const randomData = notificationsData[Math.floor(Math.random() * notificationsData.length)];
      
      const newNotification: Notification = {
        id: Date.now(),
        ...randomData,
        time: "now",
      };

      setNotifications((prev) => [newNotification, ...prev].slice(0, 4)); // Keep up to 4
    };

    // Initial notification
    setTimeout(createNotification, 1000);
    // Create a new notification at random intervals between 3 and 7 seconds
    const interval = setInterval(createNotification, Math.random() * 4000 + 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[380px]">
      <div className="flex flex-col space-y-3">
        <AnimatePresence>
          {notifications.map((notif) => (
            <motion.div
              key={notif.id}
              layout
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{
                opacity: 0,
                scale: 0.9,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 40,
              }}
            >
              <Card className="bg-white/90 dark:bg-slate-800/90 shadow-2xl shadow-slate-900/20 backdrop-blur-md border border-slate-200 dark:border-slate-700">
                <CardContent className="p-4 flex items-center gap-4">
                  <img
                    src={notif.imageUrl}
                    alt={notif.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-slate-600 shadow-sm"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm truncate">
                      {notif.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
                      {notif.title}
                    </p>
                  </div>
                   <span className="text-xs text-gray-400 dark:text-gray-500 flex-shrink-0">
                      {notif.time}
                    </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}