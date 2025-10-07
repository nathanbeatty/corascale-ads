'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// 1️⃣ Define the type for a notification
type Notification = {
  id: number
  name: string
  title: string
  time: string
  imageUrl: string
}

// 2️⃣ Static data (typed automatically)
const notificationData: Notification[] = [
  { id: 1, name: 'Juan Martinez', title: 'Meeting Booked', time: '10:42 AM', imageUrl: 'https://i.pinimg.com/736x/53/7c/31/537c3147c6077903261c715256d7abb7.jpg' },
  { id: 2, name: 'Sarah Courtland', title: 'Meeting Booked', time: '10:35 AM', imageUrl: 'https://i.pinimg.com/1200x/b4/f0/4d/b4f04de35a64a288d4a325ef3ca3be6e.jpg' },
  { id: 3, name: 'Cam Preston', title: 'Meeting Booked', time: '10:21 AM', imageUrl: 'https://i.pinimg.com/736x/47/81/ad/4781ad4bb7d6387f13d67ba2eb366e0d.jpg' },
  { id: 4, name: 'Ashley Johnson', title: 'Meeting Booked', time: '9:58 AM', imageUrl: 'https://i.pinimg.com/736x/65/e2/8b/65e28b732e4a7b7125485e03d6f0601c.jpg' },
  { id: 5, name: 'Richard Pike', title: 'Meeting Booked', time: '9:45 AM', imageUrl: 'https://i.pinimg.com/736x/0d/bc/a7/0dbca7e372766da7842528c87f693c01.jpg' },
  { id: 6, name: 'Noah Jones', title: 'Meeting Booked', time: '9:30 AM', imageUrl: 'https://i.pinimg.com/736x/6c/77/13/6c7713920d98e9378b98bbb3b20aabe4.jpg' },
]

export default function NotificationStack() {
  // 3️⃣ Add type arguments to state
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const maxVisible = 4

  useEffect(() => {
    const timeout = setTimeout(() => {
      const nextNotif = notificationData[currentIndex % notificationData.length]
      setNotifications(prev => [nextNotif, ...prev.slice(0, maxVisible - 1)])
      setCurrentIndex(prev => prev + 1)
    }, currentIndex === 0 ? 500 : 4000)

    return () => clearTimeout(timeout)
  }, [currentIndex])

  return (
    <div className="relative flex justify-center items-center w-full">
      <div className="relative w-full max-w-md px-4">
        <AnimatePresence initial={false}>
          {notifications.slice(0, maxVisible).map((notif, index) => {
            const isTop = index === 0
            const scale = 1 - index * 0.05
            const yOffset = index * 12
            const opacity = 1 - index * 0.15

            return (
              <motion.div
                key={notif.id}
                layout
                initial={{
                  opacity: 0,
                  y: -100,
                  scale: 0.8,
                  rotateX: -15,
                }}
                animate={{
                  opacity,
                  y: yOffset,
                  scale,
                  rotateX: 0,
                  zIndex: maxVisible - index,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  transition: { duration: 0.2 },
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  opacity: { duration: 0.2 },
                }}
                className="absolute top-0 left-0 right-0"
                style={{
                  transformOrigin: 'top center',
                }}
              >
                <div
                  className={`
                    flex items-center gap-4 rounded-2xl p-5 w-full 
                    shadow-xl border transition-all duration-200
                    ${
                      isTop
                        ? 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                        : 'bg-white dark:bg-slate-800/60 border-slate-200/50 dark:border-slate-700/50'
                    }
                    backdrop-blur-sm
                  `}
                >
                  <img
                    src={notif.imageUrl}
                    alt={notif.name}
                    className="w-14 h-14 rounded-full object-cover dark:border-slate-700 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-base text-slate-900 dark:text-white truncate">
                      {notif.name}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                      {notif.title}
                    </p>
                  </div>
                  <div className="flex flex-col items-end flex-shrink-0">
                    <p className="text-xs text-slate-500 dark:text-slate-500">
                      {notif.time}
                    </p>
                    {isTop && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 bg-blue-500 rounded-full mt-1"
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}
